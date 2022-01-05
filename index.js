// console.log("Hello from Node.js...");

// const person = require("./person");
// console.log(person);
// console.log(person.name);

const Person = require("./person");
const person1 = new Person("John Doe", 30);
person1.greeting();
