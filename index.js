function Food(breakfast, lunch, dinner) {
  this.breakfast = breakfast;
  this.lunch = lunch;
  this.dinner = dinner;
}
Food.prototype.breakfastDrink = function() {
  if (this.breakfast === "milk") {
    return `I would like some ${this.breakfast} with my breakfast`;
  }
  return `I'm lactose intolerant, can I have some ${this.breakfast} instead`;
};
Food.prototype.eatOut = function() {
  if (this.lunch === "yes") {
    return "I'd love to get lunch at my favorite restaurant";
  }
  return "I wanna cook my own lunch";
};

Food.prototype.eatDinner = function() {
  return `I will cook some ${this.dinner} for dinner`;
};
Food.prototype.setSnack = function(snack) {
  if (snack && typeof snack === "string") {
    this.snack = snack;
  } else {
    console.error("Snack cannot be blank");
  }
};

const foodPlan = new Food("milk", "yes", "pasta");
console.log("before set snack", foodPlan);
foodPlan.setSnack("chips");
console.log("after set snack", foodPlan);
