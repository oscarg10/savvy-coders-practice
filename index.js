//HW4 solution
function initGreeting(greeting, name) {
  return function() {
    return greeting + name;
  };
}
const morningMartin = initGreeting("Good Morning, ", "Martin");
//morningMartin became a function when initGreeting was assigned
console.log(morningMartin());
