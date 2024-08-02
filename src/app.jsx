import React from "react";

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
 * no name is needed because its a callback function is needed
 * FILTER METHOD
 * REDUCE
 * FOREACH
 * SORT
 * @returns
 */

// OBJECTS
const person = {
  firstname: "Kin",
  lastName: "Birch",
};

function App() {
  let nums = [1, 2, 3, 4, 5];
  nums.concat(7);

  //Map function
  console.log(nums);

  let squared = nums.map((value) => value * value + "🍰");
  console.log(typeof squared);
  console.log(squared);

  // nums.forEach((value) => {
  //   console.log(2 * value);
  // });
  return (
    <div>
      <ul>{nums + " "}</ul>
      <ul>{squared + " "}</ul>
      <h1>
        {person.firstname} {""} {person.lastName}
      </h1>
    </div>
  );
}

export default App;
