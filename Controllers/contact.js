import { ContactSCHEMA } from "../Models/ContactSCHEMA.js";

// // // Getting all the contacts;
export const getAllContacts = async (request, response) => {
  const gettingContacts = await ContactSCHEMA.find();

  if (!getAllContacts)
    return response.json({ message: "No contact found", success: false });

  response.json({
    message: "Fetching all contacts",
    success: true,
    gettingContacts,
  });
  // // // Open the Thunder Bolt or POSTMAN and select the GET request and enter the url (http://localhost:8000/api/contact) and hit send button. You will get the response as :-
  /**
 * {
  "message": "Fetching all contacts",
  "success": true,
  "gettingContacts": [
    {
      "_id": "68ca86f19afbab626760f7ed",
      "contactName": "batman",
      "contactEmail": "batman@gmail.com",
      "contactPhone": 1234567890,
      "contactType": "public",
      "createdAt": "2025-09-17T10:01:21.249Z",
      "__v": 0
    },
    {
      "_id": "68ca8e3169a835b942296d89",
      "contactName": "superman",
      "contactEmail": "superman@gmail.com",
      "contactPhone": 1234567890,
      "contactType": "private",
      "createdAt": "2025-09-17T10:32:17.382Z",
      "__v": 0
    },
    {
      "_id": "68ca903f803785e664141637",
      "contactName": "wonderwomen",
      "contactEmail": "wonderwomen@gmail.com",
      "contactPhone": 9874563210,
      "contactType": "private",
      "createdAt": "2025-09-17T10:41:03.710Z",
      "__v": 0
    },
    {
      "_id": "68ca906a803785e664141639",
      "contactName": "blackpanther",
      "contactEmail": "blackpanther@gmail.com",
      "contactPhone": 9873210456,
      "contactType": "public",
      "createdAt": "2025-09-17T10:41:46.153Z",
      "__v": 0
    }
  ]
}
 */
  console.log("Printing all contacts => ", gettingContacts); // // Getting the same Output on Terminal;
};

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
