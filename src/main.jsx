import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <header className="header">
      <h1 className="name"> Ronisha Shigdel</h1>
      <p>Software Engineer</p>
    </header>

    <section className="intro">
      <h2> About Me </h2>
      <p>
        I have completed Master of Science degree in Computer Science from the University of Idaho, focusing on language-based security. As a Graduate Research Assistant, I worked with the Center for
        Secure and Dependable Systems (CSDS) to develop techniques and tools for software security and privacy. Previously, I was an Associate Software Engineer at Cedar Gate Technologies, developing
        software applications within the .NET Framework. I received a Bachelor of Science degree in computer science from Kathmandu University, Nepal.
      </p>
    </section>
    <section className="project">
      <h2>Projects</h2>
      <div className="projectName">
        <h3>Project 1</h3>
        <p>Implementation Model for Dependent Types and Design by Contract in C Programming Language</p>
      </div>

      <div className="projectName">
        <h3>Project 2</h3>
        <p>Student Housing Management System using ChatGPT API</p>
      </div>

      <div className="projectName">
        <h3>Project 3</h3>
        <p>E-Commerce website for second-hand goods</p>
      </div>
    </section>

    <section className="contact">
      <h2>Contact</h2>
      <p>Email id: ronishashigdel@gmail.com</p>
    </section>
  </React.StrictMode>
)
