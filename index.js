//FUNCTIONS
function doMath(x, y, mathFxn) {
  console.trace(); //Call stack
  return mathFxn(x, y);
}
function add(x, y) {
  console.trace();
  return x + y;
}

function substract(x, y) {
  console.trace();
  return x - y;
}

console.log(doMath(10, 5, add));
console.log(doMath(10, 5, substract));

/**
function calling another function.
This is a function factory that returns another function
This FUNCTION FACTORY uses the function of CLOSURE
*/
function initSportsScorer(pts) {
  return function(score) {
    return score + pts;
  };
}

const threePointer = initSportsScorer(3);
const touchdown = initSportsScorer(7);

console.log(threePointer(99));
console.log(touchdown(7));
