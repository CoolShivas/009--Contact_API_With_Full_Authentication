import express from "express";
import mongoose from "mongoose";
import bodyParser from "express";

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

server.post("/api/user/register", (request, response) => {
  // console.log("Printing the data => ", request.body); // Not going to get data because we haven't made the ejs file or neither install the ejs;
  // response.json({
  //   message: "Data printing",
  //   success: true,
  //   data: request.body,
  // }); // Not going to get json data also because we haven't made the index.ejs file or neither install the ejs;
  // // Therefore, we are not made the route especially the route i.e, (server.get("/")) that's why we are not getting both console and response.json data;
  // // So, finally we are going to make use of Thunder Bolt or PostMan to check our api because we don't have the Front-End part. For going ahead first make the Schema to automatically generate and manage the schema in your database;

  // response.json({ message: "Data is posted successfully...!", success: true });
  // // Now, Open the PostMan in VS Code itself and select the POST request then enter the url (http://localhost:8000/api/user/register) then select the body and enter this
  /**
   * {
    "mame":"shiv",
    "email":"shiv@gmail.com",
    "password":"123"
    }
   */
  // // Hit the send button. We will get the response
  /**
   * {
    "message": "Data is posted successfully...!",
    "success": true
     }
   */
  // console.log("Printing Data => ", request.body);
  /**
   * Restarting 'app.js'
Server is running at Port :-) 8000
MongoDB Connected Successfully...!
Printing Data =>  undefined
   */
  // // To resolve this above undefined. We have to use the bodyParser of express;
  console.log("Printing Data => ", request.body); // Printing Data =>  { mame: 'shiv', email: 'shiv@gmail.com', password: '123' }
  response.json({
    message: "Data is posted successfully...!",
    success: true,
    data: request.body,
  });
  /**
   * {
  "message": "Data is posted successfully...!",
  "success": true,
  "data": {
    "mame": "shiv",
    "email": "shiv@gmail.com",
    "password": "123"
  }
}
   */
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
