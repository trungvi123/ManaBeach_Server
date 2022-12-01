import express from "express";
import { createAdmin,compareAdmin,deletee ,getAllAdmins} from "../controllers/adminController.js";

const router = express.Router();
router.get("/",getAllAdmins );

router.post("/signUp",createAdmin );
router.post("/signIn",compareAdmin );
router.delete("/:id",deletee)


export default router;
