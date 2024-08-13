import ReactDOM from "react-dom/client";
import "./index.css";
import React from "react";
import App from "./App";
//import Product from "./components/product";

//console.log(React); //react is object
//const rootElement = document.getElementById("root");
// console.log(window); //web apI window is obj
// console.log(innerWidth);
//console.log(document.getElementById("root"));
//const domRootElement = ReactDOM.createRoot(document.getElementById("root"));
//useState -> Hook in React -> special javaScript function

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Home />
//   </React.StrictMode>
// );
