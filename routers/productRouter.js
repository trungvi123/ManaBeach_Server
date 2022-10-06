import express  from "express";

import {uploadImgForProduct,getAllProduct,uploadImg,createProduct,updateProduct,deletee}from "../controllers/productController.js";

const router = express.Router();

router.get('/',getAllProduct)
router.post('/',createProduct)
router.post('/upload',uploadImg,uploadImgForProduct)

router.get('/update',updateProduct)

router.delete("/:id",deletee)
export default router