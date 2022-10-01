import express  from "express";

import {getAllProduct,createProduct,updateProduct}from "../controllers/productController.js";

const router = express.Router();

router.get('/',getAllProduct)
router.post('/',createProduct)

router.get('/update',updateProduct)

 
export default router