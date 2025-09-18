import express from "express";
import {
  deleteContactById,
  getAllContacts,
  getContactById,
  newContact,
  updateContactById,
} from "../Controllers/contact.js";
import { isAuthenticated } from "../Middlewares/Auth.js";

const router = express.Router();
// // // New Contact
// // // @api description :- create contact
// // // @api method :- post
// // // @api endPoint :- /api/contact/newcontact
router.post("/newcontact", isAuthenticated, newContact);
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
// // // Delete specific contact
// // // @api description :- delete contact by id
// // // @api method :- delete
// // // @api endPoint :- /api/contact/ i.e, (http://localhost:8000/api/contact/:id)
router.delete("/:id", deleteContactById);

export default router;
