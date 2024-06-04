import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, error, isLoading } = useSWR("/api/random-character", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log(data);
  return (
    <section>
      <h3>Firstname: {data.firstName}</h3>
      <h3>Lastname: {data.lastName}</h3>
    </section>
  );
}

// You have now prepared an api route responding with a random character – let's use it to display the data for the user!

// - Switch to `pages/index.js`;
// - Import the `useSWR` hook, write a fetcher for it and fetch the route `/api/random-character`.
// - Adapt the return statement to display the `data` on screen.
// - Open the browser: the home page under `/` should now show your fetched data!
