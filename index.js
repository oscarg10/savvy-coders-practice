const strs = [
  "hello",
  "something",
  3,
  "boolean",
  "hello",
  "hello",
  "hell",
  "world",
  "hello"
];

function checkHello(strings) {
  return Boolean(
    strings
      .map(str => {
        return str === "hello";
      })
      //since all of these are booleans then you don't need the "===" operator.
      .filter(bool => {
        return bool;
      }).length
  );
}
//.includes replaces the checkHello function

// console.log(strs.includes("hello"));
//console.log(checkHello(strs));

//Write a fxn that takes an array of values and a target value and returns how many times that target value exists in the array

function countOccurences(someArr, target) {
  return someArr.filter(element => element === target).length;
}
console.log(countOccurences(strs, "hello"));
//This would not work with object. Due to pass by reference and value.
