const { error } = require("console");
const fs = require("fs");

// always remember to use the below 2 parameters - path, encoding and error handling function
const text = fs.readFile("./files/me.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Oops! Something went wrong");
  }
  console.log(data);
});
console.log(text);

//exit on uncaught errors
process.on("uncaughtException", (err) => {
  console.error("There was an uncaught error", err);
});

throw new Error("Your error");
