import React from "react";
import ReactDOM from "react-dom/client";
import Parent from "./components/parent";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Parent age={10} />
  </React.StrictMode>
);
