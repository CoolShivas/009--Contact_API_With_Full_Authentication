import express from "express";
import { login, register } from "../Controllers/user.js";

const router = express.Router();
// // // User Routes
// // // @api description :- user register
// // // @api method :- post
// // // @api endPoint :- /api/user/register
router.post("/register", register);

router.post("/login", login);

export default router;
