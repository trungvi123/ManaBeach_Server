import {contactModel} from '../models/contact.js'
import { sendMail2 } from './sendMailController.js'


const getAllContact = async (req,res) => {
    try {
        const contact = await contactModel.find()
        
        res.status(200).json(contact)
    } catch (error) {
        res.status(500)  
    }
}

const deletee = async (req, res) => {
    try {
      const idReq = req.params.id;
      await contactModel.findByIdAndDelete(idReq)
      res.status(200).json({message:"contact was deleted successfully"});

    } catch (error) {
      res.status(500).json({ error: error });
    }
  }; // xong
  
  const deleteeAll = async (req, res) => {
    try {
      const contact = await contactModel.deleteMany()
      res.status(200).json(
        {message:`${contact.deletedCount} contacts were deleted successfully`}
      );
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }; // xong



const createContact = async (req,res) => {
    try {
        const newcontact = req.body
        const contact = new contactModel(newcontact)
        await contact.save()
        sendMail2(newcontact.email)
        res.status(200).json({ 
          state:'success'
        })
    } catch (error) {
        res.status(500)  
    }
}

const updateContact = async (req,res) => {
    try {
        const updatecontact = req.body
        const contact = await contactModel.findOneAndUpdate({_id:updatecontact._id},updatecontact,{new:true})
        res.status(200).json(contact)
    } catch (error) {
        res.status(500)  
    }
}
 
export {getAllContact,createContact,deletee,deleteeAll,updateContact}