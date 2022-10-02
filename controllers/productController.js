import {productModel} from '../models/productModel.js'


const getAllProduct = async (req,res) => {
    try {
        const product = await productModel.find()
        res.status(200).json(product)
    } catch (error) {
        res.status(500)  
    }
}

const deletee = async (req, res) => {
    try {
      const idReq = req.params.id;
      await productModel.findByIdAndDelete(idReq)
      res.status(200).json({message:"Product was deleted successfully"});
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }; // xong
  
  const deleteeAll = async (req, res) => {
    try {
      const product = await productModel.deleteMany()
      res.status(200).json(
        {message:`${product.deletedCount} products were deleted successfully`}
      );
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }; // xong

const createProduct = async (req,res) => {
    try {
        const newProduct = req.body
        const product = new productModel(newProduct)
        await product.save()
        res.status(200).json(product)
    } catch (error) {
        res.status(500)  
    }
}

const updateProduct = async (req,res) => {
    try {
        const updateProduct = req.body
        const product = await productModel.findOneAndUpdate({_id:updateProduct._id},updateProduct,{new:true})
        res.status(200).json(product)
    } catch (error) {
        res.status(500)  
    }
}
 
export {getAllProduct,createProduct,updateProduct,deletee,deleteeAll}