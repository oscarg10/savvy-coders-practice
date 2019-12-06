//Function Composition.
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function add1(n) {
  return n + 1;
}

function double(n) {
  return n * 2;
}

// function add1AndDouble(n) {
//   return double(add1(n));
// }

// function doubleAndAdd1(n) {
//   return add1(double(n));
// }

// const numsAddedOneAndDoubled = nums.map(num => add1AndDouble(num));
// console.log(numsAddedOneAndDoubled);

//TODO: Add 1 and double each num inside of nums using the first 2 functions.
const numsAddedOneAndDoubled = nums
  .filter(num => num % 2 === 0)
  .map(num => add1(num))
  .map(num => double(num));
console.log(numsAddedOneAndDoubled);

//TODO: Filter out all of the ODD numbers and then repeat.
//Function composition is when we pass the return value of one function into another function

//Pure Function: no outside data (nothing outside of the scope). It also has a explicit return
//*Definitely research about pure functions.
