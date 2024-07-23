import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";

// camelCase -> gorakhRajJoshi -> while creating javascript variable
// PascalCase -> GorakhRajJoshi -> While creating component
// kebab-case -> gorakh-raj-joshi -> While creating files or folders

// A component name should be written in PascalCase
// This is App component
function App() {
  return <div className="box">Hello</div>;
}

ReactDOM.createRoot(document.getElementById("root")).render(
import React from "react";
import ReactDOM from "react-dom/client";
import Krish from "./krish";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Krish />
  </React.StrictMode>
);
