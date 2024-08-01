// whenever we are creating variable or function -> use camelCase convention

// Create a function (function declaration)
function displayMyName(firstName, lastName) {
  // firstName, lastName are parameters (variables) of function displayMyName
  return firstName + ' ' + lastName
} // a machine

// Use (call, invokes) the function
console.log(displayMyName('Gorakh', 'Joshi')) // Gorakh', 'Joshi' are function arguments (values)
console.log(displayMyName('Alex', 'Mohrs'))
console.log(displayMyName('Sandeeb', 'Adhikari'))

function App() {
  return <div>{displayMyName('Sandeeb', 'Adhikari')}</div>
}

export default App
