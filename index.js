const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//TODO: Use reduce to sum up the numbers
// const newTotal = nums.reduce(
//   (accumulator, currentValue) => accumulator + currentValue
// );

// console.log(newTotal);
function getAvg(nums) {
  return (
    nums.reduce((accumulator, currentValue) => accumulator + currentValue) /
    nums.length
  );
}
// const totalAverage = nums.reduce(
//   (accumulator, currentValue) => accumulator + currentValue
// );

console.log(getAvg(nums));
