import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import VikasDas from './vikasdas';


// camelCase -> gorakhRajJoshi -> while creating javascript variable
// PascalCase -> GorakhRajJoshi -> While creating component
// kebab-case -> gorakh-raj-joshi -> While creating files or folders

// A component name should be written in PascalCase
// This is App component
function App() {
  return (
  <div>
    <div className="box">Hello</div>
    <VikasDas />
  </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Sandeeb />
  </React.StrictMode>
);
