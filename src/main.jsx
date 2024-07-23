import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";

//block level element : div, section, main, footer, header to make it block element
// display: inline; in css

//inline level element : span, button, to make it inline element
//display: block; in css

//to know what to use block level element or inline level
//look for Semantic of html
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="box">Hello</div>
    <span className="inline">Hello</span>
    <span className="inline2">I am another inline</span>
    <section className="section">I am section</section>
    <button className="btn">Click Me</button>
  </React.StrictMode>
);
