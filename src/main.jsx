import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

//font size:n normal x font size
/* CSS Box Model */

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <header className="header">
      <h1 className="heading1">Sandeeb Adhikari</h1>
      <p className="job-title">Web Developer & Designer</p>
    </header>
    <section className="about-me">
      <div className="">
        <h3 className="heading3">About Me</h3>
        <p className="discription">
          I am a passionate web developer with a love for beautiful and
          functional website.
        </p>
      </div>
    </section>
    <section className="project-section">
      <div className="project">
        <h3 className="heading3">Projects</h3>
        <div className="project1">
          <h4>Project1</h4>
          <p>A web Application for managing tasks.</p>
        </div>
        <div className="project1">
          <h4>Project1</h4>
          <p>A web Application for managing tasks.</p>
        </div>
        <div className="project1">
          <h4>Project1</h4>
          <p>A web Application for managing tasks.</p>
        </div>
      </div>
    </section>
    <section className="contact">
      <div className="contact-section">
        <h3 className="contact">Contact</h3>
        <p className="email">Email: sandeebadhikari@gmail.com</p>
      </div>
    </section>
  </React.StrictMode>
);
