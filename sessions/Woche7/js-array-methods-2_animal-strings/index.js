console.clear();

const animalStrings = [
  "1 zooiuz",
  "cat",
  "dog",
  "elephant",
  "rabbit",
  "Lion",
  "tiger",
  "horse",
  "giraffe",
  "zebra",
  "penguin",
  "polar bear",
  "panda",
  "koala",
  "kangoroo",
  "monkey",
  "sloth",
  "hippo",
  "rhino",
];

const hippoExists = animalStrings.includes("hippo");
// Hint: You can pass the starting index as second parameter.
const catStartingFromIndexFiveExists = animalStrings.includes("cat", 5);
console.log(catStartingFromIndexFiveExists);

// Hint: Besides the array method, check out the string method `startsWith()`.
const firstAnimalStartingWithLetterP = animalStrings.find((animal) =>
  animal.startsWith("p")
);
console.log(firstAnimalStartingWithLetterP);

const indexOfGiraffe = animalStrings.findIndex((elem) => elem == "giraffe");
console.log(indexOfGiraffe);

// Note:
// - Sorting strings is slightly more complicated than sorting numbers.
// - You will need if-statements and return values of -1, 1, and 0.
// - Check out MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// Hint: There is no need to upper-/lowercase the strings before sorting them.
// Hint: sort() mutates the original array, which is bad.
// -> Use animals.slice().sort(...) to make a copy.
//[{
// id: 1
//name: "a"
//}]
const numbers = [0, 1, 2, 3, 4, 10, 5, 6];
console.log(numbers.sort((a, b) => b - a));
const animalsSortedAlphabetically = animalStrings.slice().sort(function (a, b) {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  return 0;
});
console.log(animalStrings.slice().sort((a,b) => a.localeCompare(b)));
console.log(animalsSortedAlphabetically);

// Hint: Guess what? There is a string method called `endsWith()`.
const anyAnimalEndsWithLetterZ = animalStrings.find((animal) =>
  animal.endsWith("z")
);
console.log(anyAnimalEndsWithLetterZ);
const everyAnimalHasMoreThanTwoLetters = animalStrings.filter(
  (animal) => animal.length > 10
);
console.log(everyAnimalHasMoreThanTwoLetters);

// Hint: There are several ways to go here. Let's focus on two options:
// Option 1: Concatenate all characters with `reduce()` and check for the `length` property of the result.
// Option 2: Use `map()` to create an array with the length values of all strings,
// 				then sum them up with `reduce()` (keyword: method chaining)
const sumOfAllAnimalCharacters = animalStrings.reduce(
  (accumulator, currentValue) => accumulator + currentValue.length,
  0
);
console.log(sumOfAllAnimalCharacters);

export {
  hippoExists,
  catStartingFromIndexFiveExists,
  firstAnimalStartingWithLetterP,
  indexOfGiraffe,
  animalsSortedAlphabetically,
  anyAnimalEndsWithLetterZ,
  everyAnimalHasMoreThanTwoLetters,
  sumOfAllAnimalCharacters,
};
