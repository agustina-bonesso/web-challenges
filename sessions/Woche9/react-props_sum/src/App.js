import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Sum valueA="1" valueB="10" />
    </div>
  );
}

function Sum({ valueA, valueB }) {
  const sum = Number(valueA) + Number(valueB);
  return (
    <div>
      {valueA} + {valueB} = {sum}
    </div>
  );
}
/*
Look at the `./src/App.js` file: the `App` component returns a default heading element which you need to replace with a custom component. 
Your task is to write a `Sum` component which calculates the sum of its two props and renders the result.

You can use the following hints as guideline:

- Write the `Sum` component inside of the `src/App.js`.
  - It accepts two props called `valueA` and `valueB` (make sure to destructure them).
  - It returns an HTML element and uses both props to dynamically render something like "1 + 2 = 3" (according to the props).
- Inside of the return statement of your `App` component, replace the heading with your `Sum` component and pass it both props with values of your choice.

*/
