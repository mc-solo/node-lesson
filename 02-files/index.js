const { error } = require("console");
const fs = require("fs");

// always remember to use the below 2 parameters - path, encoding and error handling function
const text = fs.readFile("./files/me.txt", "utf-8", (error, data) => {
  if (error) {
    console.log("Oops! Something went wrong");
  }
  console.log(data);
});

console.log(text);
