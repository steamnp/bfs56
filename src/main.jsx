import React from "react";
import ReactDOM from "react-dom/client";
import Parent from "./parent";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/*Rendering parent component*/}
    <Parent />
  </React.StrictMode>
);
