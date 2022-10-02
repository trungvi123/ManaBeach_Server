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

const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const check = await users.findOne({ email });
    if (check) {
      res.status(400).json({ state: "failure" });
    } else {
      const user = new users({ email, password });
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
    await contacModel.findByIdAndDelete(idReq)
    res.status(200).json({message:"user was deleted successfully"});
  } catch (error) {
    res.status(500).json({ error: error });
  }
}; // xong

const deleteeAll = async (req, res) => {
  try {
    const user = await contacModel.deleteMany()
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
      },
    });
  } catch (error) {
    res.status(500);
  }
};

export { createUser, compareUser, getAllUser ,deletee,deleteeAll};
