import React from "react";

function displayName(fname, lname) {
  return fname + " " + lname;
}
console.log(displayName("Manish", "Chaudhari"));
console.log(displayName("Bob", "John"));

function App() {
  return (
    <div>
      <h1>{displayName("John", "Cena")}</h1>
    </div>
  );
}

export default App;
