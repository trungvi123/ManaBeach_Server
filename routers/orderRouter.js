import express from "express";
import { createOrder,deletee ,getAllOrder} from "../controllers/orderController.js";

const router = express.Router();

router.get("/",getAllOrder);
router.post("/",createOrder);
router.delete("/:id",deletee);


export default router;
