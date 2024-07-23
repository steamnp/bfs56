import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'

// block level element
// inline element

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="box">Hello</div>
    <span className="inline">Hello</span>
    <span>I am another inline</span>
    <div className="section">I am section</div>
    <button className="btn">Click Me</button>
  </React.StrictMode>
)
