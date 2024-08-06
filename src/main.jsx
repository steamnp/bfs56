import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home";
import "./index.css";

console.log(document.getElementById("root"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
