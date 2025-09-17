import express from "express";
import { newContact } from "../Controllers/contact.js";

const router = express.Router();

router.post("/newcontact", newContact);

export default router;
