// Class

class Person {
  constructor(firstName, lastName, age, position) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.position = position;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  set changeName(newLname) {
    if (newLname) {
      this.lastName = newLname;
    } else {
      console.error("this is not working");
    }
  }
}

class Employee extends Person {
  constructor(firstName, lastName, age, position, empid) {
    super(firstName, lastName, age, position);
    this.id = empid;
  }
}
const emp = new Employee("Andrew", "White", 25, "Teacher", 123);
const persona = new Person("Andrew", "White", 25, "Teacher");
console.log(persona.fullName);
persona.changeName = "Miguel";
console.log(persona.fullName);
console.log(emp);
