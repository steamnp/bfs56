import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <section className="header">
      <h1>Amit Gahatraj</h1>
      <br />
      <p>Student</p>
    </section> */}

    <header>
      <h1>Amit Gahatraj</h1>
      <p>Student</p>
    </header>

    <section className="aboutme">
      <h2>About Me</h2>
      <br />
      <p>A student learning HTML and CSS.</p>
    </section>

    <section className="projects">
      <h2>Projects</h2>
      <div className="p1">
        <h3>Project One</h3>
        <p>This is project one.</p>
      </div>

      <div className="p2">
        <h3>Project Two</h3>
        <p>This is project two.</p>
      </div>

      <div className="p3">
        <h3>Project Three</h3>
        <p>This is project three.</p>
      </div>
    </section>

    <footer className="contacts">
      <h2>Contact</h2>
      <p>sample@gmail.com</p>
    </footer>
  </React.StrictMode>
)
