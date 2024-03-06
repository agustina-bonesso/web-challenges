console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);

  check(data);
});
/*
- First and last name are required and are allowed to have at least 4 and up to 30 characters.
- The user needs to be at least 14 years old.
- We need a correct email adress (i.e. including an `@` symbol) for contacting the user.
- It's necessary that the user has read the terms of service and agrees to them.
*/

function check(data) {
  if (data.firstName.length < 4 || data.firstName.length > 30) {
    console.error(
      "First Name required and allowed to have at least 4 and up to 30 characters."
    );
  }
  if (data.lastName.length < 4 || data.lastName.length > 30) {
    console.error(
      "Last Name required and allowed to have at least 4 and up to 30 characters."
    );
  }
  if (data.age < 14) {
    console.error("- The user needs to be at least 14 years old");
  }
  if (data.email.includes("@") != true) {
    console.error("We need a correct email adress");
  }
  if (data.terms-of-service) {
    console.error(
      "It's necessary that the user has read the terms of service and agrees to them"
    );
  }
}
