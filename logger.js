const EventEmitter = require("events");
const uuid = require("uuid");

// console.log(uuid.v4()); // generates a random id

class Logger extends EventEmitter {
  log(msg) {
    // Call event
    this.emit("message", { id: uuid.v4(), msg }); // same as msg: msg
  }
}

module.exports = Logger;
