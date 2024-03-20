import { countries } from "./utils/countries.js";
import { Country } from "./components/Country/Country.js";

const container = document.querySelector('[data-js="card-container"]');
const queryInput = document.querySelector('[data-js="query-input"]');

queryInput.addEventListener("input", (event) => {
  container.innerHTML = "";

  const searchString = event.target.value;
  /*
  const foundCountry = countries.find((country) =>
    country.name.startsWith(searchString)
  );
    if (foundCountry) {
    const countryElement = Country(foundCountry);
    container.append(countryElement);
  }
*/
  const foundCountries = countries.filter((country) =>
    country.name.startsWith(searchString)
  );

  if (foundCountries) {
    foundCountries.forEach((element) => {
      console.log(element);
      const countryElement = Country(element);
      container.append(countryElement);
    });
  }
});

/*

Inside the event listener, use the `find` method to find the country in the countries array which name starts with the search string.

> 💡 Strings have a method `startsWith(string)`, which might be helpful.

> 💡 Each contry in the array as a name attribute.

### 2. Find All Matching Countries

Change the method from `find` to `filter`, to filter the countries to those which name starts with the search string. Remember to change the variable name from `foundCountry` to `foundCountries` to reflect that it now is an array.

Adapt the rendering of the found countries. You'll need to loop over the array of `foundCountries`. Which array method can you use for that?
*/
