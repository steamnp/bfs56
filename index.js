import express from "express";
import { errorHandler, notFound } from "./middleware/error";
import mongoose from "mongoose";

const app = express();

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

app.use(notFound);
app.use(errorHandler);
