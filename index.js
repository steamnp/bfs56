import express from "express";
const app = express();
app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
app.get("/api/product", (req, res, next) => {
  res.json({ name: "iphone", price: 1000 });
});
