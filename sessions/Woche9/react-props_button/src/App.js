import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Button text="Click me!" color="yellow" onClickButton={handleButton} />
    </div>
  );
}

function Button({ color, disabled, text, onClickButton }) {
  return (
    <button
      disabled={disabled}
      style={{ backgroundColor: `${color}` }}
      onClick={onClickButton}
    >
      {text}
    </button>
  );
}

function handleButton() {
  alert("You have clicked on this button ");
}
/*

Look at the `./src/App.js` file: the `App` component returns a default heading element that you need to replace with a custom component.

Your task is to write a `Button` component which takes three props `color`, `disabled`, and `text` and renders a button with the given color, text and disabled state.

You can use the following hints as guideline:

- Write a `Button` component inside of the `src/App.js`.

  - It accepts three props: `color`, `disabled`, and `text` (make sure to destructure them).
  - It returns an HTML button element which
    - renders its text according to the `text` prop,
    - has its disabled attribute set according to the `disabled` prop, and
    - uses the `color` prop to set the text color of the button

> 💡 Note: use inline styling with the help of the `style` attribute: `style={{height: "100px"}}`

> 💡 Additional hint: If you want to set the background color via a prop, you need to use camelCase `backgroundColor` instead of kebab-case `background-color`.

- Inside of the return statement of your `App` component, replace the heading with your `Button` component and pass it the props as you wish.

🎉 Congratulations, you have created a very flexible button component!

However, clicking a button without anything happening is pretty useless, right? Let's fix that!

Inside of your `Button` component, use the `onClick` prop and pass it a `console.log()` with the text of your choice.

Use an anonymous function like `onClick={() => alert('You clicked me!')}` to make sure the code is called when the button is clicked (and not with every render).

🎉 Congratulations, you've defined your first event handler in React!


By now, you've defined the event handler inline in the JSX (which looks something like `onClick={() => alert('You clicked me!')}`). Let's extract the logic to an event handler function and pass this function to the `<button> element`.

- Inside the `Button` component, create a function `handleClick` which calls the same `console.log` you've passed to the `<button>`s `onClick` prop.
- Replace the anonymous function of the `<button>`'s `onClick` prop with the `handleClick` function. Make sure NOT to call `handleClick` here.
- Check whether the `console.log` is still working.
  - If not, check your brackets again.

*/
