const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//This nums is the name of the array and it is in the global scope

/**
 * TODO: Write a fxn. that grabs all of the odd elements in any ARRAY of NUMBERS.
 * HINT: An odd number, num, will RETURN TRUE when we test with: num % 2 === 1;
 */

//this nums NAMED PARAMETER does not directly reference nums in the global scope
function filterOdds(nums) {
  //=> replaces function keyword, braces, return keyword (if it is 1 statement)
  return nums.filter(num => num % 2 === 1);
}

//Every function needs to have a return, otherwise it will return undefined.

// TODO: Write a funtion that returns the sum of all the numbers in any ARRAY of NUMBERS.
function numberSummer(nums) {
  return nums.reduce((accumulator, currentValue) => accumulator + currentValue);
}

// TODO: MAP over nums and triple each number.
const tripleEachNum = nums.map(num => num * 3);

console.log(numberSummer(nums));
console.log(filterOdds(nums));
console.log(tripleEachNum);
