import {productModel} from '../models/productModel.js'
import multer from 'multer'

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

// --------------------------- start upload product-----------------------


const multerConfig = multer.diskStorage({
  destination: (req,file,callback)=>{
    callback(null,'public/images/products/')
  },
  filename:(req,file,callback)=>{
    let name = file.originalname.split('.')[0]
    const ext = file.mimetype.split('/')[1]
    callback(null,`image-${name}.${ext}`)
  },
}) 

const isImage = (req,file,callback)=>{
  if(file.mimetype.startsWith('image')){
    callback(null,true)
  }else {
    callback(new Error('Only image is allowed..'))
  }
}

const upload = multer({
  storage:multerConfig,
  fileFilter:isImage
})
 
const uploadImg = upload.array('photo')



const uploadImgForProduct = async (req,res) => {
  try { 
    const dtreq = req.body
    const product = await productModel.find({ _id: dtreq.idProduct })
    if(product[0].imgs.length <= 3){
      //https://manabeachserver.up.railway.app/ server cá nhân
      product[0].imgs.push(`https://manabeachserver.up.railway.app/images/products/image-${dtreq.namePhoto}.jpeg`);
      product[0].save()
      res.json({message:'Chi duoc them toi da 4 anh'})
    }
  } catch (error) {
    res.status(500)  
    
  } 
}




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


// ---------------------------end upload product-----------------------

const updateProduct = async (req,res) => {
    try {
        const updateProduct = req.body
        const product = await productModel.findOneAndUpdate({_id:updateProduct._id},updateProduct,{new:true})
        res.status(200).json(product)
    } catch (error) {
        res.status(500)  
    }
}
 
export {uploadImgForProduct,getAllProduct,createProduct,updateProduct,deletee,deleteeAll,uploadImg}