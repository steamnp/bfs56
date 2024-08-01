import React from "react";

const nums = [9, 22, 4, 34];

// console.log(displayName("Manish", "Chaudhari"));
// console.log(displayName("Bob", "John"));

//STATEMENTS if it doesnt return a value. ex- declaring a variable let num =1; let nums = [1,2,3,4]
//EXPRESSION it returns a value ex- nums

// in JSX we can only write expressions in them no statements
// we don't use arrays directly in JSX
//in JSX  objects are converted to strings
/**
 * For Arrays there are predefined functions we will call them methods
 * FUNCTIONS
 * parameters vs arguments
 *
 *
 * MAP METHOD FOR ARRAYS
 * argument for Map needs to be afunction
 * no name is needed because its a callback is needed
 * FILTER METHOD
 * REDUCE
 * FOREACH
 * SORT
 * @returns
 */

let sorted = nums.toSorted();
console.log(sorted);
function App() {
  return (
    <div>
      <h1>{sorted}</h1>
    </div>
  );
}

export default App;
