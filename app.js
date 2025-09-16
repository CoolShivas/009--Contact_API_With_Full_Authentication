import express from "express";
import mongoose from "mongoose";
import bodyParser from "express";
import { register } from "./Controllers/user.js";

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

server.post("/api/user/register", register);

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
