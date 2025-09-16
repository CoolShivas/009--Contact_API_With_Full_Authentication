import { UserSCHEMA } from "../Models/UserSCHEMA.js";
import bcrypt from "bcryptjs";

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
