console.clear();

/*
Rewrite the following functions as arrow functions.
Use implicit returns when possible
*/
// const addNumbers = (first, second) => {
//  return first + second;
// };
function getCurrentHour() {
  const now = new Date();
  const currentHour = now.getHours();

  if (currentHour === 0) {
    return "12am";
  } else if (currentHour === 12) {
    return "12pm";
  } else if (currentHour <= 11) {
    return currentHour + "am";
  } else {
    return currentHour - 12 + "pm";
  }
}
const calculation = (x,y,z) => {
  return (x ** 2 + y ** 2 + z ** 2) ** 0.5;
}

/*function getVectorLength(x, y, z) {
  return (x ** 2 + y ** 2 + z ** 2) ** 0.5;
}
*/
function cleanInput(string) {
  return string.toLowerCase().trim();
}

/*
Rewrite the following arrow functions as classic functions.
*/

const isOddAndSmall = (number) => {
  if (number > 10) {
    return false;
  }

  if (number % 2 === 0) {
    return false;
  }

  return true;
};

function isOddAndSmall(number){
  if (number > 10) {
    return false;
  }
  if (number % 2 === 0) {
    return false;
  }
  return true;
}

const add3 = (a, b, c) => a + b + c;
function add3(a,b,c){
  return a + b + c;
}
const repeat10 = (string) => string.repeat(10);

function repeat(string){
  return string.repeat(10);
}