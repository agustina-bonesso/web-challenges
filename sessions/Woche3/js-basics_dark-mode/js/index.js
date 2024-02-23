console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

/*
Add some interactivity to this website. You can use the following hints as guideline:

- if the body has the class "dark", the page is displayed in dark mode
- query all 3 buttons with the 'data-js' attribute
- add an event listener to each button:
  - "switch to dark mode" button always adds the class "dark" to the body
  - "switch to light mode" button always removes the class "dark" from the body
  - "toggle mode" button toggles the class "dark" on the body
*/
/*
const firstChoiceButton = document.querySelector('[data-js="choice-button-1"]');
const secondChoiceButton = document.querySelector(
  '[data-js="choice-button-2"]'
);

// 3. This event listener is connected properly. When clicked the button is shown active. However, the debug message doesn't appear in the debug console. Where is the error with this code?
firstChoiceButton.addEventListener("click", () => {
  firstChoiceButton.classList.add("active-choice");
  secondChoiceButton.classList.remove("active-choice");
  console.log("Selected first choice");
});
*/

//first: grab button  
const switchToDarkMode = document.querySelector('[data-js="dark-mode-button"]');
// second: add the Event to the Button 
switchToDarkMode.addEventListener("click", () => {bodyElement.classList.add("dark")});


const switchToLightMode = document.querySelector('[data-js="light-mode-button"]');

switchToLightMode.addEventListener("click", () => {

bodyElement.classList.remove("dark")

});

const toggleModeButton = document.querySelector('[data-js="toggle-button"]');

toggleModeButton.addEventListener("click", () => {
    bodyElement.classList.toggle("dark");
  });


