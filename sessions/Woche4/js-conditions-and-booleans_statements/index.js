console.clear();

// Part 1: Password

if("1<10"){
    console.log("True")
}
const SUPER_SECRET_PASSWORD = "password1234";

const receivedPassword = "password1234";

if(SUPER_SECRET_PASSWORD === receivedPassword){
    console.log("Welcome! You are logged in as Brunhilde1984.");
}else{
    console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 8.6;

   if(Number.isInteger(number)){
    if(number % 2 === 0){
        console.log("This is a even number");
    }else{
        console.log("This is a odd number");
    }
   }else{
        console.log("Please enter a correct entry")
   }


// Part 3: Hotdogs
const numberOfHotdogs = 10;
let priceOfHotdog;

if ( numberOfHotdogs < 5){
    priceOfHotdog = 2;
    console.log(priceOfHotdog);
}else if(numberOfHotdogs < 100){
        priceOfHotdog = 1.5;
        console.log(priceOfHotdog);
}else if(numberOfHotdogs < 1000000){
        priceOfHotdog = 1.0;
        console.log(priceOfHotdog);
        }
        else{
            priceOfHotdog = 0.1;
            console.log(priceOfHotdog);
        }


// Part 4: Daytime
const currentHour = 19;
let statement = "";
currentHour < 17 ? statement= "Still need to learn..." : statement = "Party Time"

console.log(statement);

// Part 5: Greeting
const name = "Archibald";

const greeting = "Hello " + [(name === "coach")? "coach" : name ]+ "!"; 

console.log(greeting);


/*
### Part 1: Login

- check if the received password matches our `SUPER_SECRET_PASSWORD`
- if the password is wrong, console.log "Access denied!"
- if the password matches, console.log "Welcome! You are logged in as Brunhilde1984."
- try our different values for `receivedPassword`

### Part 2: Even / Odd

- use an if/else statement to log 'even number' if the variable `number` is even, and 'odd number' otherwise
- use different values for `number` to check if all cases work.

### Part 3: Hotdogs

- for a given `numberOfHotdogs` a person buys, log the respective price that the person has to pay:
- for less than 5 hotdogs: 2 euro per hotdog
- for more than 5 but less than 100 hotdogs: 1.50 euro per hotdog
- for more than 100 but less than 1 000 000 hotdogs: 1 euro per hotdog
- for more than 1 000 000 hotdogs: 0.10 euro per hotdog
- change the `numberOfHotdogs` to see if your code works properly

### Part 4: Daytime

- use a ternary operator to define the `statement` variable as follows:
- if the currentHour is smaller than 17, `statement` should read "Still need to learn..."
- if the currentHour is greater or equal to 17 it should equal "Partytime!!!"

### Part 5: Greetings

- use a ternary operator inside the round brackets to complete the `greeting` as follows.
- if the variable `name` is equal to the name of your coach, the `greeting` should read "Hello Coach!"
- otherwise the string saved in `name` should be used instead, e.g.:
  ```js
  const name = "Archibald";
  // logs "Hello Archibald!"
  ```
- change the value of `name` to check if the ternary operator works properly.


*/
