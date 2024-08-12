import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

console.dir(document);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
