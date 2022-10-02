import express from "express";
import { createUser,compareUser, getAllUser } from "../controllers/userController.js";

const router = express.Router();
router.post("/signUp", createUser);
router.post("/signIn", compareUser);
router.get('/',getAllUser)
router.delete("/:id",deletee)

export default router;
