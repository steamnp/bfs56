import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <head>
      <title>Portfolio</title>
      <link href="" />
    </head>

    <body className="Portfolio">
      <header className="Header">
        <h1 className="Name"> Ronisha Shigdel</h1>
        <p>Software Engineer</p>
      </header>

      <section className="Intro">
        <h2> About Me </h2>
        <p>
          I have completed master’s degree in computer science from the University of Idaho, focusing on language-based security. As a Graduate Research Assistant, I worked with the Center for Secure
          and Dependable Systems (CSDS) to develop techniques and tools for software security and privacy. Previously, I was an Associate Software Engineer at Cedar Gate Technologies, developing
          software applications within the .NET Framework. I received a Bachelor of Science degree in computer science from Kathmandu University, Nepal.
        </p>
      </section>
      <section className="Project">
        <h2>Projects</h2>
        <div className="ProjectName">
          <h3>Project 1</h3>
          <p>Implementation Model for Dependent Types and Design by Contract in C Programming Language</p>
        </div>

        <div className="ProjectName">
          <h3>Project 2</h3>
          <p>Student Housing Management System using ChatGPT API</p>
        </div>

        <div className="ProjectName">
          <h3>Project 3</h3>
          <p>E-Commerce website for second-hand goods</p>
        </div>
      </section>

      <section className="Contact">
        <h2>Contact</h2>
        <p>ronishashigdel@gmail.com</p>
      </section>
    </body>
  </React.StrictMode>
)
