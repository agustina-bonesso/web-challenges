console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  const numberA = Number(data.numberA);
  const numberB = Number(data.numberB);

  let result;
  if (data.operator === "addition") {
    result = add(numberA, numberB);
  }
  if (data.operator === "subtraction") {
    result = subtract(numberA, numberB);
    console.log(result);
  }
  if (data.operator === "multiplication") {
    result = multiply(numberA, numberB);
  }
  if (data.operator === "division") {
    result = divide(numberA, numberB);
  }
  console.log(data.operator);

  // --v-- write your code here --v--

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});