import express from "express";
import mongoose from "mongoose";
import bodyParser from "express";
import userRouter from "./Routes/user.js";
import contactRouter from "./Routes/contact.js";
import { config } from "dotenv";

const server = express();

///////***********************************************************************///////
///////***********************************************************************///////

// // // Starting of middlewares;

server.use(bodyParser.json());

// // // Ending of middlewares;

///////***********************************************************************///////
///////***********************************************************************///////

// // // Starting of User Routes;

// // // server.post("/api/user/register", register);
// // // Now, there is no need of post or get request from server file. This thing can be handler from router file now;
// // // Therefore, instead of post/get request we have to use the middleware of router as post/get or anything else;

server.use("/api/user/", userRouter); // It will be same for both register and login;
server.use("/api/contact/", contactRouter); // It will be same for all the contact related things;

// // // Ending of User Routes;

///////***********************************************************************///////
///////***********************************************************************///////

// // // Starting of Setup of .env;

config({ path: ".env" });

// // // Ending of Setup of .env;

///////***********************************************************************///////
///////***********************************************************************///////

// // // Starting of connection MongoDB to ExpressJS through Mongoose;

mongoose
  .connect(process.env.MONGO_URI, { dbName: "Contact_APIs" })
  .then(() => console.log("MongoDB Connected Successfully...!"))
  .catch((error) => console.log(error));

// // // Ending of connection MongoDB to ExpressJS through Mongoose;

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server is running at Port :-) ${PORT}`);
});
