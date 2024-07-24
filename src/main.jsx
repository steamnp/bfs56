import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <header>
      <h1>Bibek Raut</h1>
      <br />
      <p>Web Developer and Designer</p>
    </header>
    <section className="About">
      <h2>About Me</h2>
      <p>
        I am a passionate web developer with a love for creating beautiful and
        functional websites.
      </p>
    </section>
    <section className="Projects">
      <h2>Projects</h2>
      <div className="project1">
        <h3>Project One</h3>
        <p>A web application for managing tasks.</p>
      </div>
      <div className="project2">
        <h3>Project Two</h3>
        <p>A portfolio website for showcasing my work.</p>
      </div>
      <div className="project3">
        <h3>Project Three</h3>
        <p>An e-commerce site for selling products online.</p>
      </div>
    </section>
    <section className="Contact">
      <h2>Contact Me</h2>
      <p>You can reach me at example@email.com</p>
    </section>
  </React.StrictMode>
);
