// Reduce superpower: reduce an array down to 1 element.

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = nums.reduce((currentNum, total) => (total += currentNum));

console.log(sum);
