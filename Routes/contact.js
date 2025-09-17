import express from "express";
import {
  getAllContacts,
  getContactById,
  newContact,
  updateContactById,
} from "../Controllers/contact.js";

const router = express.Router();
// // // New Contact
// // // @api description :- create contact
// // // @api method :- post
// // // @api endPoint :- /api/contact/newcontact
router.post("/newcontact", newContact);
// // // Get all contacts
// // // @api description :- get all contact
// // // @api method :- get
// // // @api endPoint :- /api/contact/ i.e, (http://localhost:8000/api/contact/)
router.get("/", getAllContacts);
// // // Get specific contact
// // // @api description :- get contact by id
// // // @api method :- get
// // // @api endPoint :- /api/contact/ i.e, (http://localhost:8000/api/contact/:id)
router.get("/:dynamic", getContactById);
// // // Update specific contact
// // // @api description :- update contact by id
// // // @api method :- put
// // // @api endPoint :- /api/contact/ i.e, (http://localhost:8000/api/contact/:id)
router.put("/:id", updateContactById);

export default router;
