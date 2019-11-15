//Recursion
function writePsychoBook(n) {
  console.log("invoking psycho books is now", n);

  if (n === 0) {
    return "I am done";
  }

  return `All work and no play makes Jack a dull boy ${writePsychoBook(n - 1)}`;
}

console.log(writePsychoBook(99));
