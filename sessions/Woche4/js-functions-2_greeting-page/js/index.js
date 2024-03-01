console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  const time = new Date().getHours();
  
  return (time > 6 && time < 12)
    ? "Good Morning"
    : (time > 13 && time < 18)
    ? "Good Afternoon"
    : (time > 19 && time < 22)
    ? "Good Evening" : "Good Nigth"; 
   
}

function getDayColor() {
  const day = new Date().getDay();
  

  if (day === "1") {
    return "darkgray";
  } else if (day > 1 && day < 6) {
    return "lightblue";
  } else return "hotpink";
}
console.log(getDayColor());
display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();