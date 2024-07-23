import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <main className="container">
      <section className="sectionone">
        <div className="boxone">
          <h1 className="headingone">Heading 1</h1>
          <p className="paragraphone">Paragraph 1</p>
        </div>
      </section>
      <section className="sectiontwo">
        <div className="boxtwo">
          <h1 className="headingtwo">Heading 2</h1>
          <p className="paragraphtwo">Paragraph 2</p>
        </div>
      </section>
    </main>
  </React.StrictMode>
)
