import { createServer } from "node:http";

export const server = createServer((request, response) => {
  if (request.url === "/api/fish/1") {
    response.statusCode = 200;
    response.end("Hello World");
  }
  if (request.url === "/api/fish/2") {
    response.statusCode = 200;
    response.end("Hello");
  } else {
    response.statusCode = 404;
    response.end("Notd");
  }
});

/* 
- Switch to the `./server.js`; use the `createServer` method provided by the `node:http` module to create a server.
- Inside of the function body of `createServer`, you can access the requested url 
with the help of the `request` object; it provides a `url` key which holds the url value.
  - Check the value of this `url` key to equal `/api/fish/1` or `/api/fish/2` and pass the respective value to `response.end()` as argument. Make sure to also set the correct status code using `response.statusCode =`.
- Export the server as a named export from the `./server.js` file.
- Open the `./index.js` file and import the server from the `./server.js` file.
- Call the `listen(8000)` method on the server to start listening on port 8000.

✨ Your server now reacts differently depending on the requested url! Let's check that it works:

- Run `npm run start` to run the `index.js` file using `node`.
- Switch to your browser and open `localhost:8000/api/fish/1` as well as `localhost:8000/api/fish/2`.
- You should see the output you've declared as `response.end`. */
