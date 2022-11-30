import { users } from "../models/user.js";
import bcrypt from "bcryptjs";

const getAllUser = async (req, res) => {
  try {
    const user = await users.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(500);
  }
};

const getUser = async (req, res) => {
    const { email } = req.body;
    const user = await users.findOne({ email }); 
    if(user){
      res.status(200).json({
        user: {
          email,
          userCart:user.cart
        },
      });
    }else {
      res.json({state:'failure'})
    }
};

const createUser = async (req, res) => {
  try {
    const { email, password,cart } = req.body;
    const check = await users.findOne({ email });
    if (check) {
      res.status(400).json({ state: "failure" });
    } else {
      const user = new users({ email, password ,cart});
      await user.save();
      res.status(200).json({ state: "success" });
    }
  } catch (error) {
    res.status(500)
  }
};

const deletee = async (req, res) => {
  try {
    const idReq = req.params.id;
    await productModel.findByIdAndDelete(idReq)
    res.status(200).json({message:"user was deleted successfully"});
  } catch (error) {
    res.status(500).json({ error: error });
  }
}; // xong

const deleteeAll = async (req, res) => {
  try {
    const user = await productModel.deleteMany()
    res.status(200).json(
      {message:`${user.deletedCount} users were deleted successfully`}
    );
  } catch (error) {
    res.status(500).json({ error: error });
  }
}; // xong

const compareUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await users.findOne({ email });

    if (!user) return res.status(200).json({ state: "failure" });
    const isCorrectPassword = await bcrypt.compare(password, user.password);

    if (!isCorrectPassword) return res.status(200).json({ state: "failure" });

    return res.status(200).json({
      state: "success",
      user: {
        email,
        userCart:user.cart
      },
    });
  } catch (error) {
    res.status(500);
  }
};

const update = async (req, res) => {
  try {
    const updateUser = req.body;
    const idReq = req.params.id;
    const user = await users.findOneAndUpdate(
      { _id: idReq },
      updateUser,
      { new: true }
    );
    res.status(200).json(user);
  } catch (error) {
    res.status(500);
  }
}; // xong


export { createUser, compareUser, getAllUser ,deletee,deleteeAll,update,getUser};
