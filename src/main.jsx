import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <header>I am header</header>
    <main>
      <section>I am title section of main</section>
      <section>I am body section of main</section>
    </main>
    <div className="box"></div>
    <footer>I am footer</footer>
  </React.StrictMode>
)
