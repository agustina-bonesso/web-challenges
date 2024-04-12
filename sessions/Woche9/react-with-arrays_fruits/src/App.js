import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1,
      name: "Banana",
      color: "yellow",
    },
    {
      id: 2,
      name: "Apple",
      color: "red",
    },
    {
      id: 3,
      name: "Kiwi",
      color: "brown",
    },
    {
      id: 4,
      name: "blueberries",
      color: "blue",
    },
    {
      id: 5,
      name: "orange",
      color: "orange",
    },
  ];

  return (
    <div className="app">
      <ul className="app__pokemons">
        {fruits.map((fruit) => {
          return (
            <li key={fruit.id}>
              <Card id={fruit.id} name={fruit.name} color={fruit.color} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
