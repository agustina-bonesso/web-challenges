/*

Switch the input values of the two input fields when clicking the button

- [ ] Add a second input element to the index.html
- [ ] Assign the second input element to a variable
- [ ] Add a third button (a switch button) to the index.html
- [ ] Assign the third button to a variable
- [ ] Make sure that when the switch button is clicked, the values of the two input fields are being switched
- [ ] Make sure that all three buttons work on both input fields

Hint: the HTML entity for the switch button is: &updownarrow

*/

const firstInput = document.querySelector('[data-js="first-input"]');
const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');
const lowercaseButton = document.querySelector('[data-js="button-lowercase"]');
const switchcaseButton = document.querySelector(
  '[data-js="button-switchcase"]'
);

uppercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toUpperCase();
});

lowercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toLowerCase();
});

switchcaseButton.addEventListener("click", () => {
  firstInput.value = toggleCase(firstInput.value);
});

function toggleCase(str) {
  const stringArray = str.trim().split('');
  let newArrayString = new Array(stringArray.length);

  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === stringArray[i].toUpperCase()) {
      newArrayString[i] = stringArray[i].toLowerCase();
    } else {
      newArrayString[i] = stringArray[i].toUpperCase();
    }
  }
  return newArrayString.join('');
}
