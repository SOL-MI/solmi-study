"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
var _sum = _interopRequireDefault(require("./sum"));
// const arrowFunction = () => {
//   return "Hello, Babel!";
// };

// const promiseExample = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Promise resolved!"), 1000);
// });

// promiseExample.then(console.log);

// console.log(arrowFunction());

console.log("Total:", (0, _sum.default)(1, 3));