// console.log(arguments);
// console.log(require("module").wrapper);

//module.exports
const Calculator = require("./test-module-1");
const calc1 = new Calculator();
console.log(calc1.add(2, 2));

//exports
// const calc2 = require("./test-module-2");
const { add, multiply } = require("./test-module-2");
console.log(add(5, 2));
console.log(multiply(5, 2));

//Caching
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();
