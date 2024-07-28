import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <title>Gurungportgolio</title>
    <div>
      <header>
        <h1>Durga Gurung</h1>
        <p>Full Stack Java Developer</p>
      </header>

      <section id="about-me" className="section-box">
        <h2>About Me</h2>
        <p>
          Hi, I’m [Your Name], a passionate [Your Profession] with a background
          in Java. I enjoy playing Soccer and love to travel.
        </p>
      </section>

      <section id="projects" className="section-box">
        <h2>Projects</h2>
        <div className="project">
          <h3>Portfolio Builder</h3>
          <p>
            A sleek and responsive personal portfolio website to showcase
            projects and skills.
          </p>
        </div>
        <div className="project">
          <h3>Interactive Resume</h3>
          <p>
            A dynamic and visually appealing resume featuring interactive
            elements and modern design.
          </p>
        </div>
        <div className="project">
          <h3>Creative Landing Page</h3>
          <p>
            An engaging landing page with custom animations and a focus on
            conversion optimization.
          </p>
        </div>
      </section>

      <section id="contact" className="section-box">
        <h2>Contact</h2>
        <p>
          Contact me at:{" "}
          <a href="mailto:gurungriwaaz7@gmail.com">gurungriwaaz7@gmail.com</a>
        </p>
      </section>
    </div>
  </React.StrictMode>
);
