import { admins } from "../models/admins.js";
import bcrypt from "bcryptjs";

const getAllAdmins = async (req, res) => {
  try {
    const ad = await admins.find();
    res.status(200).json(ad);
  } catch (error) {
    res.status(500);
  }
};

const deletee = async (req, res) => {
  try {
    const idReq = req.params.id;
    await productModel.findByIdAndDelete(idReq)
    res.status(200).json({message:"admin was deleted successfully"});
  } catch (error) {
    res.status(500).json({ error: error });
  }
}; // xong

const deleteeAll = async (req, res) => {
  try {
    const admin = await productModel.deleteMany()
    res.status(200).json(
      {message:`${admin.deletedCount} admins were deleted successfully`}
    );
  } catch (error) {
    res.status(500).json({ error: error });
  }
}; // xong

const createAdmin = async (req, res) => {
  const newAd = req.body;
  if (newAd.adminKey === process.env.ADMIN_KEY_SIGNUP) {
    try {
      const ad = new admins(newAd);
      await ad.save();
      res.status(200).json(ad);
    } catch (error) {
      res.status(500).json({ state: "error" });
    }
  } else {
    res.status(300).json({ state: "failure" });
  }
};

const compareAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await admins.findOne({ email });

    if (!admin) return res.status(200).json({ state: "failure" });
    const isCorrectPassword = await bcrypt.compare(password, admin.password);

    if (!isCorrectPassword) return res.status(200).json({ state: "failure" });

    return res.status(200).json({
      state: "success",
      user: {
        email,
        isAdmin:admin.isAdmin,
        level:admin.level
      },
    });
  } catch (error) {
    res.status(500);
  }
};

export { getAllAdmins, createAdmin, compareAdmin,deletee,deleteeAll };
