const fs = require("fs");
const path = require("path");

// Create folder
fs.mkdir(path.join(__dirname, "/test"), {}, function (err) {
  if (err) throw err;
  console.log("Folder created...");
});

// using arrow function
fs.mkdir(path.join(__dirname, "/test1"), {}, (err) => {
  if (err) throw err;
  console.log("Folder created...");
});

// Create and write to file
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "Hello World!",
  (err) => {
    if (err) throw err;
    console.log("File written to..");
  }
);
// Will overwrite
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "I love Node.js!",
  (err) => {
    if (err) throw err;
    console.log("File written to..");
  }
);

// Append to it
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "Hello World!",
  (err) => {
    if (err) throw err;
    console.log("File written to..");

    // File append
    fs.appendFile(
      path.join(__dirname, "/test", "hello.txt"),
      " I love Node.js!",
      (err) => {
        if (err) throw err;
        console.log("File written to..");
      }
    );
  }
);

// Read file
fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Rename file
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "helloworld.txt"),
  (err) => {
    if (err) throw err;
    console.log("File renamed...");
  }
);
