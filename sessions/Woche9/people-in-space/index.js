console.log("Sanity check");

const peopleInSpace = document.querySelector("[data-js='people-in-space']");
const listOfPeopleInSpace = document.querySelector("ul");
const allButton = document.querySelector("[data-js='allButton']");
const tiangongButton = document.querySelector("[data-js='tiangongButton']");
const issButton = document.querySelector("[data-js='issButton']")

async function getPeopleInSpace() {
  const response = await fetch("http://api.open-notify.org/astros.json");
  const data = await response.json();

  console.log("data: " + data);

  peopleInSpace.textContent = data.number;

  allButton.addEventListener("click", (e) => {
    data.people.forEach((element) => {
      const li = document.createElement("li");
      console.log(element);
      li.innerHTML = `Name: ${element.name}`;
      listOfPeopleInSpace.append(li);
    });
  });

  tiangongButton.addEventListener("click", (e) => {
    listOfPeopleInSpace.textContent = "";
    data.people
      .filter((element) => element.craft === "Tiangong")
      .forEach((element) => {
        const li = document.createElement("li");
        console.log(element);
        li.innerHTML = `Name: ${element.name}`;
        listOfPeopleInSpace.append(li);
      });
  });

  issButton.addEventListener("click", (e) => {
    listOfPeopleInSpace.textContent = "";
    data.people
      .filter((element) => element.craft === "ISS")
      .forEach((element) => {
        const li = document.createElement("li");
        console.log(element);
        li.innerHTML = `Name: ${element.name}`;
        listOfPeopleInSpace.append(li);
      });
  });
}
getPeopleInSpace();


/*
As a bonus feature you could add a ul to the page that gets updated with 
the names of the people currently in space (this information is also 
  included in the response from the API). 
  You will need to think about looping over an array,
   creating dom elements and updating their content. 
   As well as appending dom elements to the page.
*/

/*
As an extra bonus you could add 3 buttons to the page.
All, ISS and Tiangong. Then when you click on one of the buttons you update the list of people displayed on the page based 
on which space craft they are on. i.e. if you click on the ISS button, your list of people should only include those on the ISS. 
We learnt about an array method that would be particularly helpful in this scenario.
+/

*/
