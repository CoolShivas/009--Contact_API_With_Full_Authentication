export const newContact = async (request, response) => {
  console.log("Printing the newContact => ", request.body);
  response.json({
    message: "New contact saved..",
    data: request.body,
    success: true,
  });
  // // // Open the Thunder Bolt or POSTMAN then select the request as POST enter the url (http://localhost:8000/api/contact/newcontact)
  // // // Then, select the body and write this
  /**
   * {
        "name":"batman",
        "email":"batman@gmail.com",
        "phone":"1234567890",
        "type":"public"
    }
   */
  // // // Finally, hit the send button of Thunder Bolt or POSTMAN. We will get the Output as :-
  /**
   *{
      "message": "New contact saved..",
        "data": {
            "name": "batman",
            "email": "batman@gmail.com",
            "phone": "1234567890",
            "type": "public"
    },
    "success": true
}
   */
  // // // Therefore, Terminal Console Output as :-
  /**
   * Restarting 'app.js'
Server is running at Port :-) 8000
MongoDB Connected Successfully...!
Printing the newContact =>  {
  name: 'batman',
  email: 'batman@gmail.com', 
  phone: '1234567890',       
  type: 'public'
}

   */
};
