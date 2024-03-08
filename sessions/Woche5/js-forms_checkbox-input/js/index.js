console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

/*
TOS is short for Terms of Service. Here, the `alert()` in the submit event handler should only be called if the `tos` checkbox has been checked.

> 💡 You can use an early `return;` in an if statement to prevent the `alert()` from being called.

In addition, the error message below the checkbox should only be displayed if the checkbox is **not** checked. The message should disappear as soon as the user checks the checkbox - and it should reappear as soon as the user unchecks the checkbox. Use the given functions `showTosError()` and `hideTosError()`.

Can you make the error message hidden initially (before the form is submitted)?

*/

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}


tosCheckbox.addEventListener("input", () => {
  
});




form.addEventListener("submit", (event) => {
  event.preventDefault();

  const form = new FormData(event.target);

  // Convert the FormData object into a regular JavaScript object.
  const formData = Object.fromEntries(form);

  // Log the resulting: all form input names as keys and their corresponding values.
  // This object makes it easier and "faster" to access form data
  console.log("object of all input elements", formData);
  console.log(formData.tos);

  
  if (formData.tos == "on") {
    hideTosError();
    //return alert("Form submitted");
  }else{
    showTosError();
  }
});

