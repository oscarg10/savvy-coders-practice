function myPow(num, exp) {
  let ret = num;

  for (let i = 1; i < exp; i += 1) {
    ret *= num;
  }
  return ret;
}

console.log(myPow(2, 3));

//recursion

function myPow(num, exp) {


  if (exp === 0) { //starts at cero because it is the kick out.
    return 1;
  }
  return (num *= myPow(num, exp - 1));
}

console.log(myPow(2,3));

/* factorial exercise
for loop can count backwards
*/
function factorial(num) {
  let ret = 1;

  for (let i = num; i >= 1; i -= 1) {
    ret *= i;
  }

  return ret;
}

console.log(factorial(4));

//Recursive solution
function factorial(num) {


  if (num === 0) { //starts at cero because it is the kick out.
    return 1;
  }
  return num * factorial(num,  - 1);
}

console.log(factorial(4));
