import express from "express";
import { register } from "../Controllers/user.js";

const router = express.Router();
// // // User Routes
// // // @api description :- user register
// // // @api method :- post
// // // @api endPoint :- /api/user/register
router.post("/register", register);

export default router;
