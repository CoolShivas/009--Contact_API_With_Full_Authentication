// export const isAuthenticated = async (request, response, next) => {
//   const token = request.header("Authen");

//   console.log("Checking Token => ", token);
//   // // // Now, Open the Thunder Bolt or POSTMAN and select the POST request and enter the url (http://localhost:8000/api/contact/newcontact) then select the body and enter the data such as :-
//   /**
//    *
//    * {
//   "name":"mayur",
//   "email":"mayur@gmail.com",
//   "phone":"1020304050",
//   "type":"public"
// }
//    */
//   // // // And, then hit the send button you will get the buffering or loading in response and on Terminal as :- undefined
//   /**
//    * Restarting 'app.js'
// Server is running at Port :-) 8000
// Checking Token =>  undefined
// MongoDB Connected Successfully...!
//    */
//   /****************************************************************** */
//   // // // Therefore, try this Open the Thunder Bolt or POSTMAN and select the POST request and enter the url (http://localhost:8000/api/contact/newcontact) then select the body and enter the data such as :-
//   /**
//    *
//    * {
//   "name":"mayur",
//   "email":"mayur@gmail.com",
//   "phone":"1020304050",
//   "type":"public"
// }
//    */
//   // // // Then, select the Headers you will see the blank check box with two columns named as header and value.
//   // // // Tick mark the check the box and fill the columns such as (header = Authen that comes from here( const token = request.header("Authen");) and value as token id if you have or for checking purpose write whatever you want such as name) Then, have a look on Terminal your output as :-
//   /**
//    * Restarting 'app.js'
// Server is running at Port :-) 8000
// MongoDB Connected Successfully...!
// Checking Token =>  shiva

//    */
//   // // // And, on respone you will see the processing...... To stop this click on cancel request;

//   /////////////////************************************************************************ */

//   // // // Finally, instead of mentioning the header as Authen and value as Token you have to mention it. It will automatically comes here then it will verify whether the user is authenticated or not with the help of that token. That user is going to provide;
// };

////////********************************************************************************************* *///////
////////********************************************************************************************* *///////
////////********************************************************************************************* *///////
////////********************************************************************************************* *///////

// export const isAuthenticated = async (request, response, next) => {
//   const token = request.header("Authen");
//   console.log("Checking Token => ", token);
//   // // // Now, Open the Thunder Bolt or POSTMAN and select the POST request and enter the url as (http://localhost:8000/api/user/login) then select the body and enter the data such as :-
//   /**
//    * {
//     "email":"kannu@gmail.com",
//     "password":"123"
// }
//    *
//    */
//   // // // Then, hit the send btn you will get the response as :-
//   /**
//    *{
//   "message": "Welcome kannu",
//   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OGM5NmFkNDhiOWNlY2I2MWFhMjM1YjgiLCJpYXQiOjE3NTgxNzUwMzksImV4cCI6MTc1ODI2MTQzOX0.hW_bQtvaYpsJVM4yJgXRCXr6sZL_9U_u2nmKMg8QbX8",
//   "success": true
// }
//    */
//   // // // Then, copy the token and go back adding new contact page or to the url as (http://localhost:8000/api/contact/newcontact) and paste the token in the value column and fill the body with data as :-
//   /**
// //    * {
// //   "name":"mayur",
// //   "email":"mayur@gmail.com",
// //   "phone":"1020304050",
// //   "type":"public"
// // }
//    */
//   // // // Therefore, on Terminal you will get the Output as :-
//   /**
//  * Restarting 'app.js'
// Server is running at Port :-) 8000
// MongoDB Connected Successfully...!
// Checking Token =>  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OGM5NmFkNDhiOWNlY2I2MWFhMjM1YjgiLCJpYXQiOjE3NTgxNzUwMzksImV4cCI6MTc1ODI2MTQzOX0.hW_bQtvaYpsJVM4yJgXRCXr6sZL_9U_u2nmKMg8QbX8
//  *
//  */
//   // // // And, on respone you will see the processing...... To stop this click on cancel request;

//   // // // Now on Terminal we get the Token that contains the whole information of the user the token related to that user; Now, we have to extract the information from that token;
// };

// ////////********************************************************************************************* *///////
// ////////********************************************************************************************* *///////
// ////////********************************************************************************************* *///////
// ////////********************************************************************************************* *///////

import jwt from "jsonwebtoken";
import { UserSCHEMA } from "../Models/UserSCHEMA.js";

export const isAuthenticated = async (request, response, next) => {
  const token = request.header("Authen");

  // // // If token not present on the database or invalid token;
  if (!token)
    return response.json({ message: "Please, Login first..", success: false });

  // // Extracting the token to get the user id from the Token;
  const verifyingToken = jwt.verify(token, process.env.JWT); // At the time of login the secret key you have given with token mention here from Controllers/user.js file login function;

  //   console.log(verifyingToken);// Go to POSTMAN enter url (http://localhost:8000/api/contact/newcontact) then mention header and value with token then fill body then hit send btn you will get the below Terminal Output as :-
  //   /**
  //    * Server is running at Port :-) 8000
  // MongoDB Connected Successfully...!
  // {
  //   userId: '68c96ad48b9cecb61aa235b8',
  //   iat: 1758175039,
  //   exp: 1758261439
  // }
  //    */

  const userIdentity = verifyingToken.userId;

  let confirmUser = await UserSCHEMA.findById(userIdentity);

  //   console.log(confirmUser); // Go to POSTMAN enter url (http://localhost:8000/api/contact/newcontact) then mention header and value with token then fill body then hit send btn you will get the below Terminal Output as :-
  //   /**
  //    * Restarting 'app.js'
  // Server is running at Port :-) 8000
  // MongoDB Connected Successfully...!
  // {
  //   _id: new ObjectId('68c96ad48b9cecb61aa235b8'),
  //   userName: 'kannu',
  //   userEmail: 'kannu@gmail.com',
  //   userPassword: '$2b$10$yKP1/GvyDTEu3m3SJcJCEu9XOyRImYhUHWY64blN2ZKCPpLHn/zFW',
  //   createdAt: 2025-09-16T13:49:08.083Z,
  //   __v: 0
  // }
  //    */
  // // // Finally, we are getting the whole details of that token related user;

  if (!confirmUser)
    return response.json({ message: "User not found", success: false });

  request.confirmUser = confirmUser; // Now, making the user global for this app by entering this token;

  next(); // At, the end calling the next function i.e, (router.post("/newcontact", isAuthenticated, newContact);) newContact function of Controllers/newContact.js to post whatever he/she wants;
};
