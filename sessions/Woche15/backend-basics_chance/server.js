import { createServer } from "node:http";
import Chance from "chance";

const chance = new Chance();

export const server = createServer((request, response) => {
    console.log(request.url)
  const name = chance.name();
  const age = chance.age();
  const profession = chance.profession();
  chance.name({ nationality: 'it' })
  chance.name({ gender: 'male' });
  response.statusCode = 200;
  response.end(
    `Hello, my name is ${name} and I am ${age} years old. I am a ${profession}.`
  );
});

/* 
- Use `createServer()` (`server.js`) and `.listen()` (`index.js`) to respond to the request on the port listened to.
- `chance` must be installed and and can be used use it as follows:
  - install via `npm install chance`
  - import via `import Chance from "chance";`
  - instantiate Chance so it can be used: `const chance = new Chance();` (you can do this outside the `createServer()` callback)
  - use the Chance documentation to find out how to create
    - a random person name and save it to a variable: `name`,
    - a random person age and save it to a variable: `age` and
    - a random web profession and save it to a variable: `profession`.
  - use the variables to build the response string: `Hello, my name is ${name} and I am ${age} years old. I am a ${profession}.`
- Make the server respond with the string. Reload your browser on the port you've created several times to check that it works.
 */
