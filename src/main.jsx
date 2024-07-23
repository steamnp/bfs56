import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <form>
      <label htmlFor="fname">First name:</label>
      <br />
      <input type="text" id="fname" name="fname" value="John" />
      <br />
      <label htmlFor="lname">Last name:</label>
      <br />
      <input type="text" id="lname" name="lname" value="Doe" />
      <br />
      <br />
      <input type="submit" value="submit" />
    </form>
  </React.StrictMode>
);
