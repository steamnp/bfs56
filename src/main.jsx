import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
//console.log is for the debugging purpose
//{age: 30, favNumber: 7} is the object in javascript, which can be excess by props
// to access different properties of the object, we can use props.age, props.favNumber

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
