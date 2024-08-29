import express from "express";
const app = express();
app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
app.get("/api/product", (req, res, next) => {
  // const output = { name: "iphone", price: 1000 };
  // res.json(output);
  console.log("get is called");
});
app.get("/api/product/new", (req, res, next) => {
  const output = { name: "new response" };
  res.json(output);
});
app.get("/", (req, res, next) => {
  res.json("Hello World");
});
app.post("/register", (req, res, next) => {
  console.log("post is called");
});

app.use((error) => {
  console.log("error");
});
