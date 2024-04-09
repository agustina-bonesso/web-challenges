import "./styles.css";
const couchs = ["Roland"];
export default function App() {
  return (
    <div>
      <Greeting name="Roland" isCouch={couchs.includes(name)} />
    </div>
  );
}

function Greeting({ isCouch, name }) {
  if (isCouch) {
    return <h1>Hallo Couch</h1>;
  }
  return <h1>Hallo {name}</h1>;
}

/*
Look at the `./src/App.js` file: the `App` component returns a default heading element. 
Replace this element with a custom `Greeting` component, which renders a greeting according to its props.

You can use the following hints as guideline:

- Write the `Greeting` component inside of the `src/App.js`.
  - It accepts a prop called `name` (make sure to destructure it).
  - It returns an HTML element and uses the `name` prop to render "Hello, [name]!";
- Inside of the return statement of your `App` component, 
replace the heading with your `Greeting` component and pass it a `name` prop with a value of your choice.
*/
