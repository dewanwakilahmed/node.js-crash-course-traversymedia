// console.log("Hello from Node.js...");

// const person = require("./person");
// console.log(person);
// console.log(person.name);

// import Person from "./person"; // ES6 way, but not yet available!
const Person = require("./person"); // Common JS way
const person1 = new Person("John Doe", 30);
person1.greeting();
