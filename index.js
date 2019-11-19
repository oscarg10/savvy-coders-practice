//Modification of function factory example
function initMeal(meal, entree) {
  return function() {
    return `${entree}! It's what's for ${meal}`;
  };
}

const beefDinner = initMeal("dinner", "beef");
console.log(beefDinner());
