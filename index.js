function shoppingList(obj1, obj2, obj3) {
  return {
    food: obj1,
    clothes: obj2,
    cars: obj3,

    getParam1: () => `Hello ${shoppingList.food}`,
    getParam2: function() {
      return `hello again ${this.clothes}`;
    },
    //this won't work because it looks for the global 'cars' which is undefined
    getCars: () => `Bye ${this.cars} `
  };
}

const myObj = shoppingList("pizza", "t-shirt", "BMW");

console.log(myObj);
console.log(myObj.getParam1());
console.log(myObj.getParam2());
console.log(myObj.getCars());

//Function Constructor

function Food(breakfast, lunch, dinner) {
  this.breakfast = breakfast;
  this.lunch = lunch;
  this.dinner = dinner;

  this.breakfastDrink = function() {
    if (this.breakfast === "milk") {
      return `I would like some ${breakfast} with my breakfast`;
    }
    return `I'm lactose intolerant, can I have some ${breakfast} instead`;
  };
  this.eatOut = function() {
    if (this.lunch === "yes") {
      return "I'd love to get lunch at my favorite restaurant";
    }
    return "I wanna cook my own lunch";
  };
  //This won't work because of the arrow function
  this.eatDinner () => `I will cook some ${dinner} for dinner`;
  };


const foodPlan = new Food("milk", "yes", "pasta");
console.log(foodPlan);
console.log(foodPlan.breakfastDrink());
console.log(foodPlan.eatOut());
console.log(foodPlan.eatDinner());
