// create two objects 1. Food and 2. calories
const food = {
  drink: "coffee",
  entree: "steak",
  dessert: "cake"
};
const foodCalories = [{ coffee: 80 }, { steak: 200 }, { cake: 300 }];
class Meal {
  constructor(drink, entree, dessert) {
    this.drink = drink;
    this.entree = entree;
    this.dessert = dessert;
  }
  set maxCalories(foodCalories) {
    this.calories = foodCalories;
  }
  get maxCalories() {
    const coffeeCalories = foodCalories.shift();
    //const coffeeCalories = this.calories;
    // for ( let i = 0; i < foodCalories.length; i += 1) {
    //   coffeeCalories.push(`${foodCalories}`);
    //   console.log(this.coffeeCalories[i])
    // }
    // console.log(this.foodCalories)
    // this.coffeeCalories = this.foodCalories;

    return coffeeCalories;
  }
}
const foodPlan = new Meal(food.drink, food.entree, food.dessert);
foodPlan.maxCalories = foodCalories;
console.log(foodPlan.maxCalories);
