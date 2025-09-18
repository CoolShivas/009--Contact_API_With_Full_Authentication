export const isAuthenticated = async (request, response, next) => {
  const token = request.header("Authen");

  console.log("Checking Token => ", token);
  // // // Now, Open the Thunder Bolt or POSTMAN and select the POST request and enter the url (http://localhost:8000/api/contact/newcontact) then select the body and enter the data such as :-
  /**
   * 
   * {
  "name":"mayur",
  "email":"mayur@gmail.com",
  "phone":"1020304050",
  "type":"public"
}
   */
  // // // And, then hit the send button you will get the buffering or loading in response and on Terminal as :- undefined
  /**
   * Restarting 'app.js'
Server is running at Port :-) 8000
Checking Token =>  undefined
MongoDB Connected Successfully...!
   */
  /****************************************************************** */
  // // // Therefore, try this Open the Thunder Bolt or POSTMAN and select the POST request and enter the url (http://localhost:8000/api/contact/newcontact) then select the body and enter the data such as :-
  /**
   * 
   * {
  "name":"mayur",
  "email":"mayur@gmail.com",
  "phone":"1020304050",
  "type":"public"
}
   */
  // // // Then, select the Headers you will see the blank check box with two columns named as header and value.
  // // // Tick mark the check the box and fill the columns such as (header = Authen that comes from here( const token = request.header("Authen");) and value as token id if you have or for checking purpose write whatever you want such as name) Then, have a look on Terminal your output as :-
  /**
   * Restarting 'app.js'
Server is running at Port :-) 8000
MongoDB Connected Successfully...!
Checking Token =>  shiva

   */
  // // // And, on respone you will see the processing...... To stop this click on cancel request;

  /////////////////************************************************************************ */

  // // // Finally, instead of mentioning the header as Authen and value as Token you have to mention it. It will automatically comes here then it will verify whether the user is authenticated or not with the help of that token. That user is going to provide;
};
