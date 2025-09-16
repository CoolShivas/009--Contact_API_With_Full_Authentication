import express from "express";
import mongoose from "mongoose";
import bodyParser from "express";
import { UserSCHEMA } from "./Models/UserSCHEMA.js";

const server = express();

///////***********************************************************************///////
///////***********************************************************************///////

// // // Starting of middlewares;

server.use(bodyParser.json());

// // // Ending of middlewares;

///////***********************************************************************///////
///////***********************************************************************///////

// // // Starting of User Routes;

// // // User Routes
// // // @api description :- user register
// // // @api method :- post
// // // @api endPoint :- /api/user/register

server.post("/api/user/register", async (request, response) => {
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

  let regUser = await UserSCHEMA.create({
    userName: name,
    userEmail: email,
    userPassword: password,
  });

  response.json({
    message: "User created succcessfully...",
    success: true,
    data: regUser,
  });
});

// // // Ending of User Routes;

///////***********************************************************************///////
///////***********************************************************************///////

// // // Starting of connection MongoDB to ExpressJS through Mongoose;

mongoose
  .connect(
    "mongodb+srv://shivas2710cool00_db_user:5li4H0Hq2MQZUlBC@cluster0.awkqo94.mongodb.net/",
    { dbName: "Contact_APIs" }
  )
  .then(() => console.log("MongoDB Connected Successfully...!"))
  .catch((error) => console.log(error));

// // // Ending of connection MongoDB to ExpressJS through Mongoose;

const PORT = 8000;

server.listen(PORT, () => {
  console.log(`Server is running at Port :-) ${PORT}`);
});
