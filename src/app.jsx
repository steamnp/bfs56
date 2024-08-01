function displayName(firstName, lastName) {
  // (firstName, lastName are parameters (variable))
  return firstName + " " + lastName;
}

console.log(displayName("Alex", "Smith")); // Alex and Smith are arguments (actual value)
console.log(displayName("Oscar", "Wilde"));

const person = {
  firstName: "John",
  lastName: "Doe",
};

function App() {
  return <div>{displayName("Robert", "Hill")}</div>;
}

export default App;
