import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <header className="header"> My Portfolio</header>
    <section className="about">
      <h2>About Me</h2>
      <p>I am learning to code at Takeo.</p>
    </section>
    <section className="project">
      <h2>Projects</h2>
    </section>
    <div className="project">
      <h3>Week One</h3>
      <p>Vs Code & github</p>
    </div>
    <div className="project">
      <h3>Week Two</h3>
      <p>Html & Css</p>
    </div>
    <div className="project">
      <h3>Week Three</h3>
      <p>GitHub Copilot</p>
    </div>
    <footer className="contact">
      <h2>Contact</h2>
      <p>lhakpa@tumen.nyc</p>
    </footer>
  </React.StrictMode>
);
