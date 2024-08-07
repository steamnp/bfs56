import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./home";
import "./index.css";
import Product from "./component/product";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Home />
    <Product />
  </React.StrictMode>
);
