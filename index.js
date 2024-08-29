import express from "express";
import { errorHandler, notFound } from "./middleware/error.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { userRouter } from "./routes/user.js";

dotenv.config();
const app = express();

app.use(express.json()); // parse incoming data
app.listen(4000, () => {
  console.log("I am running in port 4000");
});

app.use("/api/user", userRouter);
app.use(notFound);
app.use(errorHandler);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to Database!");
  })
  .catch((error) => {
    console.log(error);
  });
