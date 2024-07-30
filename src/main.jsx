import React from "react";
import ReactDOM from "react-dom/client";
import Sandeeb from "./components/sandeeb";
import Parent from "./components/parent";
import "./styles/index.css";
import Tailwind from "./components/tailwind";

//console.log is for the debugging purpose
//{age: 30, favNumber: 7} is the object in javascript, which can be excess by props
// to access different properties of the object, we can use props.age, props.favNumber

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Sandeeb age={30} favNumber={7} /> */}
    <Sandeeb />
    <Parent />
    <Tailwind />
  </React.StrictMode>
);
