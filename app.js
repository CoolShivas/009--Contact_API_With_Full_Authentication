import express from "express";
import mongoose from "mongoose";
import bodyParser from "express";
import userRouter from "./Routes/user.js";
import contactRouter from "./Routes/contact.js";

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
