import mongoose from "mongoose";

const schema = mongoose.Schema(
    {
    email: {
        type:String,
        require:true
    },
    note: {
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    }
},{timestamps:true})

export const contactModel = mongoose.model('ManaBeach_contact',schema)