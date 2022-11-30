import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  cart:{
    type:Array,
    default:[]
  }
},{timestamps:true});





export const orderModel = mongoose.model("ManaBeach_order", orderSchema);