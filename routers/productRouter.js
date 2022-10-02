import express  from "express";

import {getAllProduct,createProduct,updateProduct,deletee}from "../controllers/productController.js";

const router = express.Router();

router.get('/',getAllProduct)
router.post('/',createProduct)

router.get('/update',updateProduct)

router.delete("/:id",deletee)
export default router