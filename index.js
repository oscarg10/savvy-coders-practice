// // Arrays

// const numbers = [1, 2, 3, 4, 5, 6];
// const strings = ["hello", "world", "again"];
// const newArray = [];

// //concat does not mutate elements, but you can still join or combine arrays
// const numbersAndStrings = numbers.concat(strings);

// //functional programming: Do not mutate any data ever (ideal)

// for (let i = 0; i < numbersAndStrings.length; i += 1) {
//   const value = numbersAndStrings.pop();
//   if (typeof value === "number") {
//     newArray.push(value + 236);
//   }
//   if (typeof value === "string") {
//     newArray.push(value + "Hello, I am a string");
//   }
// }

// console.log(newArray);

// Instructor's solution

const numbers = [1, 2, 3, 4, 5, 6];
const strings = ["hello", "world", "again"];
const newArray = [];

//concat does not mutate elements, but you can still join or combine arrays
const numbersAndStrings = numbers.concat(strings);

for (let i = 0; i < numbersAndStrings.length; i += 1) {
  if (typeof numbersAndStrings[i] === "string") {
    newArray.push((numbersAndStrings[i] += "Hello, I am a string"));
  } else {
    newArray.push((numbersAndStrings[i] += 236));
  }
}

console.log(newArray);
