import {orderModel} from '../models/order.js'


const getAllOrder = async (req,res) => {
    try {
        const order = await orderModel.find()
        
        res.status(200).json(order)
    } catch (error) {
        res.status(500)  
    }
}

const deletee = async (req, res) => {
    try {
      const idReq = req.params.id;
      await orderModel.findByIdAndDelete(idReq)
      res.status(200).json({message:"order was deleted successfully"});
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }; // xong
  
  const deleteeAll = async (req, res) => {
    try {
      const order = await orderModel.deleteMany()
      res.status(200).json(
        {message:`${order.deletedCount} orders were deleted successfully`}
      );
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }; // xong



const createOrder = async (req,res) => {
    try {
        const neworder = req.body
        const order = new orderModel(neworder)
        await order.save()
        res.status(200).json({ 
          state:'success'
        })
    } catch (error) {
        res.status(500)  
    }

    


}


// ---------------------------end upload order-----------------------

const updateOrder = async (req,res) => {
    try {
        const updateorder = req.body
        const order = await orderModel.findOneAndUpdate({_id:updateorder._id},updateorder,{new:true})
        res.status(200).json(order)
    } catch (error) {
        res.status(500)  
    }
}
 
export {getAllOrder,createOrder,deletee,deleteeAll,updateOrder}