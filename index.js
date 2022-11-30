import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import env from "dotenv";
import productRouter from "./routers/productRouter.js";
import adminRouter from "./routers/adminRoutes.js";
import userRouter from "./routers/userRoutes.js";
import orderRouter from "./routers/orderRouter.js";

import sendMailRouter from './routers/sendMailRouter.js'
env.config();

const app = express();
let PORT = process.env.PORT || 5000; // add your port
let URI = process.env.URI_BASE; // add your URI

// ADMIN_KEY_SIGNUP = 'admin@admin.ctu.edu.vn' cần thêm adminKey khi thêm 1 admin
app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());
app.use("/product", productRouter);
app.use("/sendMail", sendMailRouter);
app.use("/admin", adminRouter);
app.use("/user", userRouter);
app.use("/order", orderRouter);

app.use(express.static('public'))

mongoose
  .connect(
    "mongodb+srv://admin:uh02hELNXTJYuW88@cluster0.ohupeby.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => { 
    app.listen(PORT, () => {
      console.log("SERVER RUN");
    });
    console.log("connected");
  })
  .catch((err) => {
    console.log(err); 
  });
