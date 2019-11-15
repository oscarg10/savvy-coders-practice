const allWork = "All work and no play makes Jack a dull";

function writePsychoBook(num) {
  let str = "";
  for (i = 0; i <= num; i += 1) {
    str += allWork;
  }
  return str;
}

console.log(writePsychoBook(10));
