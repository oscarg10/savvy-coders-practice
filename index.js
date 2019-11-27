// Instructor's solution

const numbers = [1, 2, 3, 4, 5, 6];
const strings = ["hello", "world", "again"];

//concat does not mutate elements, but you can still join or combine arrays
const numbersAndStrings = numbers.concat(strings);

//Function expression.
function newArray(originalArr, stringUpdate, numberUpdate) {
  return originalArr.map(el => {
    if (typeof el === "string") {
      return (el += stringUpdate);
    }
    return (el += numberUpdate);
  });
}

console.log(newArray(numbersAndStrings, " Hello", 236));

//arrow syntax does not have any this reference.
//use map to add 1 to each number

// const results = numbers.map(number => {
//   return number + 1;
// });

// // numbers.forEach(number => {
// //   console.log(number);
// // });

// console.log(numbers);
// console.log(results);

//MAP will always return an array of the same length of the original array
