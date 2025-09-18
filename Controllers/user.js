import { UserSCHEMA } from "../Models/UserSCHEMA.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (request, response) => {
  // console.log(request.body); // { name: 'shiv', email: 'shiv@gmail.com', password: '123' }
  // response.json({ message: "data", success: true, data: request.body });
  // {
  //   "message": "data",
  //   "success": true,
  //   "data": {
  //       "name": "shiv",
  //       "email": "shiv@gmail.com",
  //       "password": "123"
  //   }
  // }

  const { name, email, password } = request.body;

  if (name === "" || email === "" || password === "") {
    return response.json({
      message: "All fields are required",
      success: false,
    });
  }

  let regUser = await UserSCHEMA.findOne({ userEmail: email });

  if (regUser) {
    return response.json({ message: "User already exist...!", success: false });
  }

  let hashPassword = await bcrypt.hash(password, 10);

  regUser = await UserSCHEMA.create({
    userName: name,
    userEmail: email,
    userPassword: hashPassword,
  });

  response.json({
    message: "User created succcessfully...",
    success: true,
    data: regUser,
  });
};

export const login = async (request, response) => {
  const { email, password } = request.body;
  // console.log(request.body); // /// Getting data { email: 'hemu@gmail.com', password: '123' }

  if (email === "" || password === "")
    return response.json({
      message: "All fields are required",
      success: false,
    });

  const loginUser = await UserSCHEMA.findOne({ userEmail: email });
  // console.log("Printing the loginUser => ", loginUser);
  /**
   * Printing the loginUser =>  {
  _id: new ObjectId('68c94a8592fb2e244681d140'),
  userName: 'jayesh',
  userEmail: 'jayesh@gmail.com',
  userPassword: '123',
  createdAt: 2025-09-16T11:31:17.345Z,
  __v: 0
}
   */
  if (!loginUser)
    return response.json({ message: "User not exists..!", success: false });

  const validPassword = await bcrypt.compare(password, loginUser.userPassword);

  if (!validPassword)
    return response.json({ message: "Invalid password..", success: false });

  // // Creation of token and assign the secret key ("!@#$%") to verify the user token will be expires in one day;
  // // If we assign ({ userId: loginUser }) it will give very long token that contains the whole information of user. So, to make the token small that's why we have used ({ userId: loginUser._id }) to get only id by id we can get the whole details;
  const token = jwt.sign({ userId: loginUser._id }, process.env.JWT, {
    expiresIn: "1d",
  });

  response.json({
    message: `Welcome ${loginUser.userName}`,
    token,
    success: true,
  });
};
