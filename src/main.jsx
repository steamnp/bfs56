import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'

// JSX (is equivalent form of html)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <form action="/action_page.php">
      <label htmlFor="fname">First name:</label>
      <br />
      <input type="text" id="fname" name="fname" value="John" />
      <br />
      <label htmlFor="lname">Last name:</label>
      <br />
      <input type="text" id="lname" name="lname" value="Doe" />
      <br />
      <br />
      <input type="submit" value="Submit" />
    </form>
  </React.StrictMode>
)
// class -> className
// for -> htmlFor
