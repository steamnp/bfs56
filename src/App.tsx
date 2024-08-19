import React, { useEffect } from "react";
const apiUrl = "https://restcountries.com/v3.1/all";

function App() {
  useEffect(() => {
    //synchronous
    fetch(apiUrl)
      .then((res) => res.json())
      .then((anotherRes) => console.log(anotherRes));
  });
  return <div>Loading...</div>;
}

export default App;
