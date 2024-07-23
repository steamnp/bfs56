import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>Hello</div>
    <p className>Paragraph</p>
    <h1 className id>
      Heading
    </h1>
    <br id />
    <h1 id>New Heading</h1>
    <img className="" id src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg?quality=90&webp=true&resize=500,454" />
    <a href=""></a>
  </React.StrictMode>
)

// div -> <div> (Opening Tag), </div> (Closing Tag), Hello (Content) -> Non void html element
// p
// h1
// body
// br -> <br /> (Slef closing Tag) -> Void HTML element
// li
// a
// img -> void html element
// button
// title
// head
// header
// footer
// form
// ul
