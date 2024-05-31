import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function Products() {
  const { data, error, isLoading } = useSWR("/api/products", fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  console.log(data);
  return (
    <ul>
      {data.map((product) => {
        return (
          <li key={product.id}>
            <p> {product.name}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </li>
        );
      })}
    </ul>
  );
}
// - Create the file `/pages/products/index.js`.
// - Import the `useSWR` hook, create a fetcher and fetch `/api/products`.
// - Map over the fetched `data` object to create a list of all products where you display their information.
// - Switch to the browser and open `/products`: you should now see a (rarely styled) list of all products.

// ✨ Great work, you've consumed your own api route to display its data in the frontend!
