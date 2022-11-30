import express from "express";
import { createUser,compareUser, getAllUser,deletee,update ,getUser} from "../controllers/userController.js";

const router = express.Router();
router.post("/signUp", createUser);
router.post("/signIn", compareUser);
router.get('/',getAllUser)
router.post('/',getUser)
router.delete("/:id",deletee) 
router.patch("/:id",update)

export default router;
