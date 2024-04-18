import { D6Button } from "./components/D6Button";
import History from "./components/History";
import "./styles.css";
import { getD6Roll } from "../src/utils.js";
import useLocalStorageState from "use-local-storage-state";

export default function App() {
  const [rolls, setRolls] = useLocalStorageState("rolls", { defaultValue: [] });
  const currentRollValue = rolls[0]?.value;

  function handleRoll() {
    setRolls([{ value: getD6Roll(), time: Date.now() }, ...rolls]);
  }

  return (
    <div className="app">
      <main className="app__main">
        <D6Button onRoll={handleRoll} value={currentRollValue} />
      </main>
      <aside className="app__aside">
        <History rolls={rolls} />
      </aside>
    </div>
  );
}

/*

The `App` component should now hold the state, define the `handleRoll` function and derive the `currentRollValue` from the `rolls` state.

- `handleRoll` should be passed to `onRoll` of the `<D6Button />`
- `currentRollValue` should be passed to `value` of the `<D6Button />`

Make sure everything still works as expected.

Now pass the `rolls` down to the `History` component as well (replace `rolls={[]}`).

> ✨ You should now see the list of recent rolls in the History component.


*/
