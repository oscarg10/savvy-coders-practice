// Instructor's solution

const numbers = [1, 2, 3, 4, 5, 6];
const strings = ["hello", "world", "again"];

//concat does not mutate elements, but you can still join or combine arrays
const numbersAndStrings = numbers.concat(strings);

//Function expression.
function newArray(originalArr, stringUpdate, numberUpdate) {
  const newArray = [];

  originalArr.forEach(el => {
    if (typeof el === "string") {
      newArray.push((el += stringUpdate));
    } else {
      newArray.push((el += numberUpdate));
    }
  });

  return newArray;
}

console.log(newArray(numbersAndStrings, " Hello", 236));

//arrow syntax does not have any this reference.
numbers.forEach(number => {
  console.log(number);
});
