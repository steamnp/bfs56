import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRouter from "./routes/authRoute.js";
import productRouter from "./routes/productRoute.js";
import blogRouter from "./routes/blogRoute.js";
import categoryRouter from "./routes/categoryRoute.js";
import blogCategoryRouter from "./routes/blogCatRoute.js";
import brandCategoryRouter from "./routes/brandCatRouter.js";
import couponRouter from "./routes/couponRouter.js";
import colorRouter from "./routes/colorRoute.js";
import enquiryRouter from "./routes/enqRoute.js";
import uploadRouter from "./routes/uploadRoute.js";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import { errorHandler, notFound } from "./middlewares/errorHandler.js";

dotenv.config();

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGODB_URL;

const app = express();

app.use(cors());

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/user", authRouter); // --> API related to user
// http://localhost:4000/api/user
app.use("/api/product", productRouter);
// http://localhost:4000/api/product
app.use("/api/upload", uploadRouter);
// http://localhost:4000/api/upload
app.use("/api/blog", blogRouter);
// http://localhost:4000/api/blog
app.use("/api/category", categoryRouter);
// http://localhost:4000/api/category
app.use("/api/blogcategory", blogCategoryRouter);
// http://localhost:4000/api/blogcategory
app.use("/api/brandcategory", brandCategoryRouter);
// http://localhost:4000/api/brandcategory
app.use("/api/coupon", couponRouter);
// http://localhost:4000/api/coupon
app.use("/api/color", colorRouter);
// http://localhost:4000/api/color
app.use("/api/enquiry", enquiryRouter);
// http://localhost:4000/api/enquiry

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port number: ${PORT}`));

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => console.log(error));
