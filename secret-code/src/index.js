import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
const getRandomNumber = () => String(Math.floor(Math.random() * 9 + 1));
const secret_code = [];
for(let i = 0; i < 4; i++) {
  let digit = getRandomNumber();
  while (secret_code.includes(digit)) {
    digit = getRandomNumber();
  }
  secret_code.push(digit);
  console.log(secret_code);
}

root.render(
  <React.StrictMode>
    <App code={secret_code} />
  </React.StrictMode>
);
