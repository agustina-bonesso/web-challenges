import useSWR from "swr";
import { useRouter } from "next/router";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isLoading } = useSWR("/api/products", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const productData = data.find((product) => product.id === id);

  return (
    <section>
      <h3>{productData.name}</h3>
      <p>{productData.description}</p>
    </section>
  );
}

// - Create the file `/pages/products/[id].js`.
// - Use the `useRouter` hook to access the `id` query parameter from `router.query`.
// - Fetch from `/api/products/[id]` (you need to interpolate the query `id` accordingly).
// - The return statement does not return a list, but a single product.
