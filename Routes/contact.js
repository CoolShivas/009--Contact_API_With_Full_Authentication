import express from "express";
import { getAllContacts, newContact } from "../Controllers/contact.js";

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

export default router;
