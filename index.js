// console.log("Hello from Node.js...");

// const person = require("./person");
// console.log(person);
// console.log(person.name);

// // import Person from "./person"; // ES6 way, but not yet available!
// const Person = require("./person"); // Common JS way
// const person1 = new Person("John Doe", 30);
// person1.greeting();

// // Import Logger
// const Logger = require("./logger");

// // Instantiate logger
// const logger = new Logger();
// logger.on("message", (data) => console.log("Called Listener:", data));
// logger.log("Hello World!");

// Create a basic server without express js
const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // console.log(req.url);
  // if (req.url === "/") {
  //   fs.readFile(
  //     path.join(__dirname, "public", "index.html"),
  //     (err, content) => {
  //       if (err) throw err;
  //       res.writeHead(200, { "Content-Type": "text/html" });
  //       // res.end("<h1>Homepage</h1>");
  //       res.end(content);
  //     }
  //   );
  // } else if (req.url === "/about") {
  //   fs.readFile(path.join(__dirname, "public", "about.html"), (err, data) => {
  //     if (err) throw err;
  //     res.end(data);
  //   });
  // } else if (req.url === "/api/users") {
  //   const users = [
  //     {
  //       name: "Bob Smith",
  //       age: 40,
  //     },
  //     {
  //       name: "John Doe",
  //       age: 30,
  //     },
  //   ];
  //   res.writeHead(200, { "Content-Type": "application/json" });
  //   res.end(JSON.stringify(users));
  // }

  // Build file path
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  // log file path
  // console.log(filePath);
  // res.end();

  // Extension of file
  let extname = path.extname(filePath);

  // Initial Content Type
  let contentType = "text/html";

  // Check ext and set content type
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  // Check if contentType is text/html but no .html file extension
  if (contentType == "text/html" && extname == "") filePath += ".html";

  // Read File
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        // Page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        // Some server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Success
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf8");
    }
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
