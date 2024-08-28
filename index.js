import express from "express";
const app = express();
app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
app.get("/api/product", (req, res, next) => {
  const output = { name: "iphone", price: 1000 };
  res.json(output);
});
app.get("/api/product/new", (req, res, next) => {
  const output = { name: "new response" };
  res.json(output);
});
