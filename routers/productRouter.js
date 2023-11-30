import express  from "express";

import {uploadImgForProduct,getAllProduct,checkQuantity,uploadImg,createProduct,updateProduct,deletee}from "../controllers/productController.js";

const router = express.Router();

router.get('/',getAllProduct)
router.post('/',createProduct)
router.post('/checkQuantity/:id',checkQuantity)

router.post('/upload',uploadImg,uploadImgForProduct)

router.put('/updateProduct',updateProduct)

router.delete("/:id",deletee)
export default router