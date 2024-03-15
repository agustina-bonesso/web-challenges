console.clear();

import randomColor from "./utils/randomColor.js";

const root = document.getElementById("root");

const color = randomColor();
console.log(color);

const circle = document.createElement("div");
circle.classList.add("circle");
circle.addEventListener("click", () => {
  circle.style.backgroundColor = randomColor();
});

const square = document.createElement("div");
square.classList.add("square");
square.addEventListener("click", () => {
  square.style.backgroundColor = randomColor();
});

const pentagon = document.createElement("div");
pentagon.classList.add("pentagon");
pentagon.addEventListener("click", () => {
  pentagon.style.backgroundColor = randomColor();
});

root.append(circle, square, pentagon);
