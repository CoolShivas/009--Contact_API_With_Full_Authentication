import express from "express";
import { newContact } from "../Controllers/contact.js";

const router = express.Router();
// // // User Routes
// // // @api description :- create contact
// // // @api method :- post
// // // @api endPoint :- /api/contact/newcontact
router.post("/newcontact", newContact);

export default router;
