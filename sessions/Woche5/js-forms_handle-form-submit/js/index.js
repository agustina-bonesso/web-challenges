console.clear();

const form = document.querySelector('[data-js="form"]');

/*  
Use JavaScript to react to the form submission.

Log all form data (in object form) into the console in the submit event handler.

Make sure the form is reset and the First Name input is focused after submission.

> 💡 You only have to touch the [`js/index.js`](./js/index.js) file.

*/
form.addEventListener("submit", (formEvent) => {
    
    formEvent.preventDefault();

  // Create a FormData object for the form that triggered the event.
  // FormData objects are used to capture the values of the form fields.
  const form = new FormData(formEvent.target);

  // Convert the FormData object into a regular JavaScript object.
  const formData = Object.fromEntries(form);

  // Log the resulting: all form input names as keys and their corresponding values.
  // This object makes it easier and "faster" to access form data
  console.log('object of all input elements', formData);

  event.target.reset();
  // Set focus to the 'firstName' input field
  event.target.elements.firstName.focus();

});
