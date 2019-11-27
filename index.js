const fruits = [
  "apple",
  "kiwi",
  "pineapple",
  "jackfruit", // index is 3
  "dragonfruit",
  "pineapple",
  "mango",
  "guava", // index is 7
  "strawberry"
];

fruits.splice(3, 3, "raspberries");
const jackfruitIndex = fruits.indexOf("jackfruit");
const guavaIndex = fruits.indexOf("guava");

console.log(fruits);
// console.log(jackfruitIndex, guavaIndex);

// slice(start, end)
// splits an array into smaller pieces
const smallerArray = fruits.slice(jackfruitIndex);
console.log("smallerArray is", smallerArray);

const bestFruits = fruits.slice(jackfruitIndex, guavaIndex + 1);
console.log("bestFruits are", bestFruits);

// includes returns true or false depending on
// whether or not the argument is in the array
const mysteryValue = fruits.includes("dragonfruit");
console.log(mysteryValue);

// indexOf returns the index of the first occurence
// of our argument in the array
console.log(fruits.indexOf("pineapple"));

// indexOf returns the index of the last occurence
// of our argument in the array
console.log(fruits.lastIndexOf("pineapple"));

const months = ["Jan", "March", "April", "June"];

// Insert 'Feb' WITHOUT removing anything
months.splice(1, 0, "Feb");
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

// Insert 'May' after removing the 1 thing at index 4
months.splice(4, 1, "May");
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
