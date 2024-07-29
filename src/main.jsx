import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import Amit from "./amit";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Amit age={23} favNumber={7} />
  </React.StrictMode>
);
