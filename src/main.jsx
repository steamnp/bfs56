import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <header>
      <div className="heading">
        <h1>Nima sherpa</h1>
        <p>Web Developer & Designer</p>
      </div>
      <section className="about">
        <h2>About Me</h2>
        <p>
          I am a passionate web developer with a love for creating beautiful and
          functional websites.
        </p>
      </section>
      <section className="projects">
        <h2>Projects</h2>
        <div className="project1">
          <h3>Project1</h3>
          <p>A web application for managing tasks.</p>
        </div>
        <div className="project2">
          <h3>Project 2</h3>
          <p>A portfolio website for showcasing my work.</p>
        </div>
        <div className="project3">
          <h3>Project 2</h3>
          <p>An e-commerce site for selling products online.</p>
        </div>
      </section>
      <section className="contact">
        <h2>Contact</h2>
        <p>Email : nimanurusherpa2022@gmail.com</p>
      </section>
    </header>
  </React.StrictMode>
);
