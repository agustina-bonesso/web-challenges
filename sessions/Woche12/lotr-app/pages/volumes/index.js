import { introduction, volumes } from "@/lib/data";
import Link from "next/link";
import { useRouter } from "next/router";


function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export default function Volumes() {
  const router = useRouter();

  function handleRandomVolume() {
    const randomVolume = getRandomElement(volumes);
    console.log(randomVolume.slug);

    router.push(`/volumes/${randomVolume.slug}`);
  }
  return (
    <>
      <h1>Lord of the Ring</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map(({ slug, title }) => (
          <li key={slug}>
            <h3>{title}</h3>
            <Link href={`/volumes/${slug}`}>Link</Link>
          </li>
        ))}
      </ul>
      <button onClick={handleRandomVolume} type="button">
        Random Volume
      </button>
    </>
  );
}
