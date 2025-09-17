import { ContactSCHEMA } from "../Models/ContactSCHEMA.js";

// // // Creating the new contact;
export const newContact = async (request, response) => {
  //   console.log("Printing the newContact => ", request.body);
  //   response.json({
  //     message: "New contact saved..",
  //     data: request.body,
  //     success: true,
  //   });

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

  const { name, email, phone, type } = request.body;

  if (name === "" || email === "" || phone === "" || type === "")
    return response.json({
      message: "All fields are required",
      success: false,
    });

  // // // Saving the data on DataBase;
  const saveContact = await ContactSCHEMA.create({
    contactName: name,
    contactEmail: email,
    contactPhone: phone,
    contactType: type,
  });
  response.json({ message: "Contact saved to DB", success: true, saveContact });
  console.log("Printing the saveContact => ", saveContact);
  /**
   * Restarting 'app.js'
Server is running at Port :-) 8000
MongoDB Connected Successfully...!
Printing the saveContact =>  {
  contactName: 'batman',
  contactEmail: 'batman@gmail.com',
  contactPhone: 1234567890,
  contactType: 'public',
  _id: new ObjectId('68ca85d9d66d13874ba7fa3f'),
  createdAt: 2025-09-17T09:56:41.363Z,
  __v: 0
}
   */
};
