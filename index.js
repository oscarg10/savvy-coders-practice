// Fizz Buzz
// If we pass a number that's divisible by both 5 and 3, log 'fizzbuzz'
// If it's only divisible by 3, log 'fizz'
//If it's only divisible by 5, log 'buzz'
// If it is not divisible by either 3 ot 5 log the number
// Loop over the number from 1 to 99

function initFizzBuzz(num1, num2) {
  return function fizzBuzz46() {
    for (let i = 0; i <= 99; i += 1) {
      if (i % num1 === 0 && i % num2 === 0) {
        console.log("fizzbuzz");
      } else if (i % num2 === 0) {
        console.log("buzz");
      } else if (i % num1 === 0) {
        console.log("Fizz");
      } else {
        console.log(i);
      }
    }
  };
}
const fizzBuzz46 = initFizzBuzz(4, 6);
fizzBuzz46();
