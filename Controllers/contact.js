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

///////////********************************************************************************* */

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
    contactUser: request.confirmUser, // Now, we are going to get one more field that is userId;
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

///////////********************************************************************************* */

// // // Getting the specific contact by ID;
export const getContactById = async (request, response) => {
  // // // Firstly, If we want the specific user. We have to use the url as (http://localhost:8000/api/contact)
  // // // Then, we have to enter the Id of that particular user after /contact/idnumber to get that particular id related user such as (http://localhost:8000/api/contact/68ca903f803785e664141637);
  // // // Therefore, we have to use the params to get specific id that the user is going to provide us;

  const identity = request.params.dynamic; // To grab the provided Id by user on url;
  // // // Always remember one thing that (request.params.dynamic or request.params.id) that will be same as here is dynamic or id. Therefore, on router file you have to give the same such as (router.get("/:dynamic", getContactById);)

  const searchContact = await ContactSCHEMA.findById(identity); // Finding that particular Id is available on our database;

  if (!searchContact)
    return response.json({ message: "No contact exists", success: false });

  response.json({
    message: "Fetched the contact related to id",
    success: true,
    searchContact,
  });
  // // // Open the Thunder Bolt or POSTMAN and select the GET request and enter the url (http://localhost:8000/api/contact/68ca903f803785e664141637) and hit send button. You will get the response as :-
  /**
   *{
  "message": "Fetched the contact related to id",
  "success": true,
  "searchContact": {
    "_id": "68ca903f803785e664141637",
    "contactName": "wonderwomen",
    "contactEmail": "wonderwomen@gmail.com",
    "contactPhone": 9874563210,
    "contactType": "private",
    "createdAt": "2025-09-17T10:41:03.710Z",
    "__v": 0
  }
}
   */
};

///////////********************************************************************************* */

// // // Updating the specific contact by ID;
export const updateContactById = async (request, response) => {
  const id = request.params.id;

  const { name, email, phone, type } = request.body;
  // console.log("Printing update contact => ", request.body);

  let updateSpecificContact = await ContactSCHEMA.findByIdAndUpdate(
    id,
    {
      contactName: name,
      contactEmail: email,
      contactPhone: phone,
      contactType: type,
    },
    { new: true }
  );
  // console.log("Printing updateSpecificContact => ", updateSpecificContact);
  /**
   * Restarting 'app.js'
Server is running at Port :-) 8000
MongoDB Connected Successfully...!
Printing updateSpecificContact =>  {
  _id: new ObjectId('68ca86f19afbab626760f7ed'),
  contactName: 'batman',
  contactEmail: 'shaktimaan@gmail.com',
  contactPhone: 4561237890,
  contactType: 'public',
  createdAt: 2025-09-17T10:01:21.249Z,
  __v: 0
}
   */

  if (!updateSpecificContact)
    return response.json({ message: "No contact exist", success: false });

  response.json({
    message: "contact updated successfully...",
    success: true,
    data: updateSpecificContact,
  });
  // // // Open the Thunder Bolt or POSTMAN and select the PUT request and enter the url (http://localhost:8000/api/contact/68ca86f19afbab626760f7ed).
  // // // Then, select the body tag and make whatever changes you want to change or update such as :-
  /**
    * * * Without update have a look
    *  {
  "name": "superman",
  "email":"superman@gmail.com",
  "phone":"1234567890",
  "type":"private"
}
    * 

** ** ** Now making changes have a look 

 {
  "name": "man of steel",
  "email":"superman@gmail.com",
  "phone":"1234567890",
  "type":"private"
}

    */
  // // //  Hit the send button. You will get the response as :-
  /**
   * {
  "message": "contact updated successfully...",
  "success": true,
  "data": {
    "_id": "68ca8e3169a835b942296d89",
    "contactName": "man of steel",
    "contactEmail": "superman@gmail.com",
    "contactPhone": 1234567890,
    "contactType": "private",
    "createdAt": "2025-09-17T10:32:17.382Z",
    "__v": 0
  }
}
   * 
   */
  // // // Therefore, you can see the changes on MongoDB as it is also updated;
};

///////////********************************************************************************* */

// // // Deleting the specific contact by ID;

export const deleteContactById = async (request, response) => {
  const id = request.params.id;

  let deletionContact = await ContactSCHEMA.findByIdAndDelete(id);

  if (!deletionContact)
    return response.json({ message: "no contact exists", success: false });

  response.json({ message: "contact deleted successfully...", success: true });
  // // // Open the Thunder Bolt or POSTMAN and select the DELETE request and enter the url (http://localhost:8000/api/contact/68ca86f19afbab626760f7ed).
  // // // Then, hit the send button. You will get the response as :-
  /**
   * {
  "message": "contact deleted successfully...",
  "success": true
}
   */
  // // // Therefore, it is also deleted from the database of MongoDB.
};

///////////********************************************************************************* */

// // // Getting the user specific contact by ID;

export const getContactByUserId = async (request, response) => {
  const idNew = request.params.iden;

  // console.log("Printing the userCOntactById IDNEW => ", idNew); // Getting id here;

  const userContactByID = await ContactSCHEMA.find({ contactUser: idNew });

  // console.log("Printing the userCOntactById => ", userContactByID); // Getting id here;
  /**
   *
 
  Restarting 'app.js'
Server is running at Port :-) 8000
Printing the userCOntactById IDNEW =>  68c955c79cc83e6ef7a5183b
MongoDB Connected Successfully...!
Printing the userCOntactById =>  [
  {
    _id: new ObjectId('68cbfbc7d160d9cb8718654d'),
    contactName: 'shaktimaan',
    contactEmail: 'shaktimaan@gmail.com',
    contactPhone: 1022278945650,
    contactType: 'public',
    contactUser: new ObjectId('68c955c79cc83e6ef7a5183b'),
    createdAt: 2025-09-18T12:32:07.549Z,
    __v: 0
  },
  {
    _id: new ObjectId('68cbff592c33d96dd7316ed6'),
    contactName: 'shaktimaan',
    contactEmail: 'shaktimaan@gmail.com',
    contactPhone: 1022278945650,
    contactType: 'public',
    contactUser: new ObjectId('68c955c79cc83e6ef7a5183b'),
    createdAt: 2025-09-18T12:32:07.549Z,
    __v: 0
  },
   */

  if (!userContactByID)
    return response.json({ message: "No contact found..", success: false });

  response.json({
    message: "fetching the user specific contacts",
    success: true,
    userContactByID,
  });
  // // // Therefore, Open the POSTMAN and make a GET request with url (http://localhost:8000/api/contact/userid/68c955c79cc83e6ef7a5183b) then hit the send btn
  /**
   * {
    "message": "fetching the user specific contacts",
    "success": true,
    "userContactByID": [
        {
            "_id": "68cbfbc7d160d9cb8718654d",
            "contactName": "shaktimaan",
            "contactEmail": "shaktimaan@gmail.com",
            "contactPhone": 1022278945650,
            "contactType": "public",
            "contactUser": "68c955c79cc83e6ef7a5183b",
            "createdAt": "2025-09-18T12:32:07.549Z",
            "__v": 0
        },
        {
            "_id": "68cbff592c33d96dd7316ed6",
            "contactName": "shaktimaan",
            "contactEmail": "shaktimaan@gmail.com",
            "contactPhone": 1022278945650,
            "contactType": "public",
            "contactUser": "68c955c79cc83e6ef7a5183b",
            "createdAt": "2025-09-18T12:47:21.592Z",
            "__v": 0
        }
    ]
}
   */
};
