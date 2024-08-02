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
 * 💯 💯 💯 METHODS FOR ARRAYS 💯 💯 💯 💯
 * Map method takes a function as a parameter
 * no name is needed because its a callback function is needed
 * FOREACH ✅
 * MAP ✅
 * SORT ✅
 * FILTER
 * REDUCE
 * SPLICE
 *
 * @returns
 */

// OBJECTS
const person = {
  firstname: "Kin",
  lastName: "Birch",
};

function App() {
  let myArr = [
    "elephant",
    "sun",
    "inconspicuous",
    "mirror",
    "laughter",
    "banana",
    "serendipity",
    "cat",
    "astronaut",
    "whisper",
    "quixotic",
    "pencil",
    "zephyr",
    "umbrella",
    "frog",
    "nebula",
    "enigmatic",
    "jazz",
    "crescendo",
    "apple",
    "level", // Palindrome
    "radar", // Palindrome
    "civic", // Palindrome
    "deified", // Palindrome
    "kayak", // Palindrome
    "madam", // Palindrome
    "noon", // Palindrome
    "racecar", // Palindrome
    "rotor", // Palindrome
    "stats", // Palindrome
    "wow", // Palindrome
    "redivider", // Palindrome
    "refer", // Palindrome
    "tacocat", // Palindrome
    "rotor", // Palindrome
    "reviver", // Palindrome
    "solos", // Palindrome
    "redder", // Palindrome
    "pop", // Palindrome
    "eve", // Palindrome
    "minim", // Palindrome
    "tenet", // Palindrome
    "deed", // Palindrome
    "gag", // Palindrome
    "civic", // Palindrome
    "bob", // Palindrome
    "aha", // Palindrome
    "mom", // Palindrome
  ];

  /**
   * MAP
   * Map method for Arrays in Js calls a callback function for each element. The callback function takes current element, index and the array as parameters.
   *  Additionaly, it takes this as an optional parameter. Unlike for each method it returns a new array.forEach method return value is undefined.
   *
   * FOREACH
   * forEach method for Arrays performs the callback function on each element of the array. The return value is undefined and therefore
   * should be used only when we don't need to use the values form the array afte the fucntion
   *
   *
   * SORT METHOD (changes the original array)
   * sort method sorts Array in place. It converts the element to a sting and sorts them based on the UTF-16 value"
   * To solve this we use a comparator function. comparator(a-b)=>{return a-b}
   * Imp: To sort an array without mutating the original array use toSorted
   * TOSORT METHOD (doesn't modify the original array)
   *
   *
   * FILTER METHOD
   * creates a shallow copy of the original array and returns an array if certain conditions are met
   */

  // let filterArr = myArr.filter((element) => {
  //   return element[0] == "a";
  // });
  // console.log(filterArr);
  // console.log(myArr);

  function isPalindrome(word) {
    let left = 0;
    let right = word.length - 1;

    while (left <= right) {
      if (word[left] !== word[right]) return false;
      left++;
      right--;
    }

    return true;
  }
  let palArr = myArr.filter((element) => {
    return isPalindrome(element);
  });

  console.log(palArr);

  return (
    <div>
      <h2>My Arrays</h2>
      <> {myArr + " "}</>
      <> {palArr + " "}</>

      {/* <ul>{sortedArr + " "}</ul> */}
      <h1>{/* {person.firstname} {""} {person.lastName} */}</h1>
    </div>
  );
}

export default App;
