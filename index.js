import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { type } from "os";

dotenv.config();

const app = express();

app.use(express.json());

const router = express.Router();

const User = mongoose.model("User", userSchema);

// listen()
// get()

app.listen(4000, () => {
  console.log("I am running in port 4000");
});

// http://localhost:4000/api/product
// REST API
app.get("/api/product", (req, res, next) => {
  const output = { name: "iPhone" };
  res.json(output);
});

app.get("/api/product/new", (req, res, next) => {
  const output = { name: "new response" };
  res.json(output);
});

app.get("/", (req, res, next) => {
  res.json({ greeting: "Hello" });
});

app.post("/register", async (req, res, next) => {
  // send req.body to database
  const newUser = await User.create(req.body);
});

app.use((req, res) => {
  res.json("Something horrible happened");
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MONGODB");
  })
  .catch((error) => {
    console.log(error);
  });
