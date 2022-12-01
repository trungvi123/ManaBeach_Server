import express from "express";
import { createContact,deletee,getAllContact} from "../controllers/contactController.js";

const router = express.Router();

router.get("/",getAllContact);
router.post("/",createContact);
router.delete("/:id",deletee);


export default router; 
