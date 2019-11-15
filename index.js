// Pass by reference and pass by value

let x = 3;

//y references its own copy of the number 3
let y = x;

function add1(n) {
  return n + 1;
}

//Primitives CANNOT be mutated (changed)
//Primitives are passed by value

// throws away its '3' and gets a whole new value of 4;
x = add1(x);
console.log("x after add1 is", x);
console.log(y);

//Pass by reference
//Objects can be mutated
const me = {
  name: "Mark"
};

const me2 = me;

function nameChanger(obj, newName) {
  obj.name = newName;
}

// I pass in 'me' to nameChanger
nameChanger(me, "Fred");

console.log(me);
console.log(me2);
