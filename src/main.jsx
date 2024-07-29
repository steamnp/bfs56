import React from 'react'
import ReactDOM from 'react-dom/client'
import Sandeeb from './sandeeb'
import Gorakh from './gorakh'

// Props -> age, favNumber

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Sandeeb age={31} favNumber={7} />
    <Gorakh age={10} />
  </React.StrictMode>
)
