import express from "express";
import { errorHandler, notFound } from "./middleware/error.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// listen()
// get()
//vLxDBlJAhwMsqJlX

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
  res.json("hello");
});

//post request

app.post("/register", (req, res, next) => {
  console.log("Post is called");
  res.json("this is post");
});

app.use(notFound);
app.use(errorHandler);

mongoose
  .connect(process.env.mongo_url)
  .then(() => {
    console.log("connected to database!");
  })
  .catch((error) => {
    console.log(error);
  });
