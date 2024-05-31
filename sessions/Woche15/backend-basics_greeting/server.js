import { createServer } from "node:http";

export const server = createServer((request, response) => {
  response.statusCode = 200;
  response.end("Hello, Agustina");
});
// export const server = …

/* Switch to the `./server.js` file and build an HTTP server which responds with "Hello, [your name]!".

You can use the following hints as guideline:

- Import the `createServer` method from the `http` module.
- Call `createServer` and pass it a function with two parameters: `request` and `response`.
- In the function body of the function passed to `createServer`, call `response.end()` and pass it the string "Hello, [your name]!".
- Export the server as a named export.

In the `./index.js` file:

- Import the server from the `./server.js` file.
- Call the `.listen()` method on the server and pass it a port number you want to listen to, e.g. 8000.

✨ You have successfully built your first server! Let's check that it works:

- Run `npm run start` to run the `index.js` file using `node`.
- Switch to your browser and open `localhost:8000` (the port number depends on the number you've passed to the `.listen()` method above).
- You should now see "Hello, [your name]!". */