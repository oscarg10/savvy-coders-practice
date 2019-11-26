// class Keyword

class Food {
  //does not have any parenthesis
  constructor(breakfast, lunch, dinner) {
    this.breakfast = breakfast;
    this.lunch = lunch;
    this.dinner = dinner;
  }

  get breakfastDrinks() {
    return `I would like some ${this.breakfast} with my breakfast`;
  }

  get eatout() {
    if (this.lunch === "yes") {
      return "I'd love to get lunch at my favorite restaurant";
    }
    return "I wanna cook my own lunch";
  }

  get eatDinner() {
    return `I will cook some ${this.dinner} for dinner`;
  }

  set changeBreakfast(newBreakfastDrinks) {
    if (newBreakfastDrinks) {
      this.breakfast = newBreakfastDrinks;
    } else {
      console.error("We don't have it available");
    }
  }
}
const foodPlan = new Food("milk", "yes", "pasta");
// console.log(foodPlan.eatout);

console.log((foodPlan.changeBreakfast = ""));

class foodPlan extends Person {
  constructor ()
}

console.log((foodPlan.changeBreakfast = ""));
console.log(foodPlan.changeBreakfast);

console.log(foodPlan.calories);

function Random(breakfast, lunch, dinner, idk) {
  Food.call(breakfast, lunch, dinner);
  this.uhum = idk;
}

const dome = new Random("milk", "yes", "pasta", "rest");

console.log(dome);
// function constructor does not do anything
// New keyword is used to invoke FC

function Food(breakfast, lunch, dinner) {
  this.breakfast = breakfast;
  this.lunch = lunch;
  this.dinner = dinner;
}

Food.prototype.setCalories (numberCalories){
  this.calories = numberCalories;
}
  const betterCalories = new Food ('drinks', 'restaurants', 'meals');

  let breakfastDrinks = ['orange juice', 'milk', 'coffee', 'water'];

  betterCalories.setCalories (breakfastDrinks);
  Food.prototype.printDrinks() {
    for (let i = 0; i >= this.calories.length; i += 1){
      console.log(this.numbers[i]);
    }

  }

//   breakfastDrinks.printDrinks();

function Meal(drink, entree, dessert) {
  this.drink = drink;
  this.entree = entree;
  this.dessert = dessert;
}

Meal.prototype.setCalories = function(numbCalories) {
  this.calories = numbCalories;
};
const foodPlan = new Meal("coffee", "steak", "cake");

const totalCals = ["80", "450", "800"];

foodPlan.setCalories(totalCals);

Meal.prototype.printCals = function() {
  for (let i = 0; i < this.calories.lenght; i += 1) {
    console.log(this.calories[i]);
  }
};

function Dinner(drink, entree, dessert, aptzr) {
  Meal.call(this, drink, entree, dessert);
  this.appetizer = aptzr;
}

const din = new Dinner("soda", "pasta", "cookies", "cheese sticks");

console.log(din);

foodPlan.printCals();
console.log(foodPlan.printCals(100));
console.log(foodPlan);

/* Questions
1. Why do we use a different array name in the setter "numbCalories", than the variable's name that stores the actual array?
2. Why do we use 'Meal' instead of 'foodPlan' in the printing function "Meal.prototype.printCals"?
3. How do I assign those calories in the array to each specific item, in this case "coffee", "steak", and "cake"?
*/
