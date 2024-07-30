import React from "react";
import ReactDOM from "react-dom/client";
import Jeneliya from "./componenets/jeneliya";
import Parent from "./componenets/parent";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Jeneliya age={26} favNumber={7} />
    <Parent />
  </React.StrictMode>
);
