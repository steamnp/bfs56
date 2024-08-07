import React from "react";
import ReactDOM from "react-dom/client";
import Parent from "./parent";
import "./styles/index.css";
import Home from "./pages/home";
//rendering the Parent component
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Parent age={30} />
    <Home />
  </React.StrictMode>
);
