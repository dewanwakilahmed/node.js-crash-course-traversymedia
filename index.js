console.log("Hello from Node.js...");

const person = require("./person");
console.log(person);
console.log(person.name);

// import Person from "./person"; // ES6 way, but not yet available!
const Person = require("./person"); // Common JS way
const person1 = new Person("John Doe", 30);
person1.greeting();

// Import Logger
const Logger = require("./logger");

// Instantiate logger
const logger = new Logger();
logger.on("message", (data) => console.log("Called Listener:", data));
logger.log("Hello World!");
