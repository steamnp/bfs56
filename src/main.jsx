import React from "react";
import ReactDOM from "react-dom/client";
import Manish from "./manish";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Manish age={25} favColor="red" favNum={44} />
  </React.StrictMode>
);
