import express from "express";
import { createAdmin,compareAdmin } from "../controllers/adminController.js";

const router = express.Router();

router.post("/signUp",createAdmin );
router.post("/signIn",compareAdmin );
router.delete("/:id",deletee)


export default router;
