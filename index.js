import express from "express";
import { errorHandler, notFound } from "./middleware/error.js"; // Add .js extension
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const router = express.Router();
router.post("/register");

app.use(router);

app.use(express.json());
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);
// Database connection

// Start server
app.listen(4000, () => {
  console.log("Server is running on port 4000");
});

// Define routes
app.get("/api/product", (req, res, next) => {
  const output = { name: "iPhone" };
  res.json(output);
});

app.get("/api/product/new", (req, res, next) => {
  const output = { name: "new response" };
  res.json(output);
});

app.post("/register", async (req, res) => {
  const newUser = await User.create(req.body);
  res.json(newUser);
});
// Error handling middleware
app.use(notFound);
app.use(errorHandler);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((error) => {
    console.log("Not connected to Database:", error);
  });
