/*
const myName = "Oscar";
Template Literal
console.log(`Hello World! this is ${myName}`);
*/
//Object literal
const name = 'Oscar';

const me = {
  name: "Oscar",
  age: 24,
  athlete: true,
  weight: 170,
  checkDrinkingAge: function() {
    return this.age >= 21;
  }

};
console.log(me.checkDrinkingAge())
/*Bracket Notation
console.log(`I am ${name}`);

//Dot notation
console.log(me.age);


const object1 = {
  id_num : 1234,
  "myFunc" : function (fullName){
    console.log(`Thanks for your purchase ${fullName}`);
  },
};

object1.myFunc("Oscar Gordillo");

for (i = 0; i <= 10; i++) {
  counter = ++;
  console.log(i);
}
Add the numbers from 1 to 10
*/
// while loop
let currentNum;
let currentTotal = 0;

while(currentNum <= 10){
  currentTotal += currentNum;
  currentNum += 1;
}
console.log(currentTotal)
// for loop
let currentTotal = 0;

for (i = 1; i <= 10; i += 1) {
  console.log('i is', i);
  currentTotal += i;
  console.log('currentTotal is', currentTotal);
}
console.log(currentTotal);

const numberSummerMachine = {
  startingNumber: 1,
  endingNumber: 10,
  sumDaNumbers: function() {
    let total = 0;

    for (let i = this.startingNumber; i <= this.endingNumber; i += 1) {
    total += i;
    }

    return total;
  }
};


//setter that allows updating of the 'local data' RESEARCH
setStatingNumber (num) {
  this.startingNumber = num;
 }

console.log(numberSummerMachine.sumDaNumbers())


// Another solution using while loops


const numberSummerMachine = {
  startingNumber: 1,
  endingNumber: 10,
  sumDaNumbers: function() {
    let total = 0;
    let i = this.startingNumber;

    while(i <= this.endingNumber) {
    total += i;
    i += 1;
    }

    return total;
  },

  setStatingNumber (num) {
    this.startingNumber = num;
   }

  console.log(numberSummerMachine.sumDaNumbers())
};




