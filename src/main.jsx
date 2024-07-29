import React from "react";
import ReactDOM from "react-dom/client";
import Nima from "./nima";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Nima age={7} favNumber={10} />
  </React.StrictMode>
);
