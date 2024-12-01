import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const arrowFunction = () => {
//   return "Hello, Babel!";
// };

// const promiseExample = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Promise resolved!"), 1000);
// });

// promiseExample.then(console.log);

// console.log(arrowFunction());

// import sum from "./sum";

// console.log("Total:", sum(1, 3));
