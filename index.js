
*/
//Meal Plan HW 7
/*
class Meal {
  constructor(drink, entree, dessert) {
    this.drink = drink;
    this.entree = entree;
    this.dessert = dessert;
  }
  set maxCalories(numCalories) {
    this.calories = numCalories;
  }
  get totalCalories() {
    for (let i = 0; i < this.calories.lenght; i += 1) {
      console.log(this.calories[i]);
    }
  }
}
const foodPlan = new Meal("coffee", "steak", "cake");
const totalCals = [80, 210, 250];
foodPlan.maxCalories = totalCals;
console.log(foodPlan);
const newCals = totalCals.shift();
console.log("Coffee has " + newCals + " calories");
*/
// Map example

const names = ["Manav", "Stevens", "Jamison", "Wright", "Smith"];

// const namesWithMr = names.map(name => `Mr. ${name}`);

function addSalutation(names, sal) {
  return names.map(name => `${sal} ${name}`);
}
console.log(addSalutation(names, "Mrs."));
