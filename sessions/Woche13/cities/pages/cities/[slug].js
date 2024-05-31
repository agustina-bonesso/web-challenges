import { useRouter } from "next/router";
import { cities } from "@/lib/data";
import Link from "next/link";

export default function City() {
  const router = useRouter();
  const { slug } = router.query;

  const cityIndex = cities.findIndex((city) => city.slug === slug);
  const city = cities[cityIndex];

  if (!city) {
    return null;
  }

  return (
    <>
      <Link href={"/cities"}>All cities</Link>
      <h1>{city.name}</h1>
      <p>{city.description}</p>
    </>
  );
}
