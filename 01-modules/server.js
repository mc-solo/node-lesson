// node runs on a server and not on a browser
// global object is much smaller than the windows object but it is  not found on the browser
// console.log(global);

const math = require("./math");

const os = require("os");
const path = require("path");

// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());
// console.log(__dirname);
// console.log(__filename);

console.log(path.parse(__filename));

console.log(math.pi);
console.log(math.divide(10, 5));
