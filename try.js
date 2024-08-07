console.log("-----------Slice Method-----------");
const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
const slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits);

console.log("\n-----------Pop Method-----------");
const lastFruit = fruits.pop();
console.log(lastFruit);

console.log("\n-----------Splice Method-----------");
const removedFruits = fruits.splice(2, 2, "Fig", "Grapes");
console.log(removedFruits);

console.log("\n-----------Map Method-----------");
const fruitObjects = fruits.map((fruit) => {
  return { name: fruit, length: fruit.length };
});
console.log(fruitObjects);

console.log("\n-----------For Each Method-----------");
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});

console.log("\n-----------Push Method-----------");
const newLength = fruits.push("Mango", "pineapple");
console.log(newLength);

console.log("\n-----------indexOf Method-----------");
const index = fruits.indexOf("Cherry", 1);
console.log(index);

console.log("\n-----------Includes Method-----------");
const hasCherry = fruits.includes("Cherry", -3);
{
  console.log(hasCherry);
}

console.log("\n-----------Join Method-----------");
const fruitString = fruits.join(",");
console.log(fruitString);

console.log("\n-----------Some Method-----------");
const hasBanana = fruits.some((fruit) => fruit.length > 4);
console.log(hasBanana);

console.log("\n-----------Reduce Method-----------");
const fruitString1 = fruits.reduce(function (accumulator, currentValue, index) {
  if (index === 0) {
    return currentValue;
  } else {
    return accumulator + ", " + currentValue;
  }
}, "");
console.log(fruitString);

console.log("\n-----------Find Method-----------");
const fruitIndex3 = fruits.find((fruit) => fruit.startsWith("G"));
console.log(fruitIndex3);
