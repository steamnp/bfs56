import React from 'react'
import ReactDOM from 'react-dom/client'
import Parent from './parent'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Rendering Parent component */}
    <Parent age={10} favNumber={7} />
  </React.StrictMode>
)
