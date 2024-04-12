import Image from "./Image";

export default function Logo({src, alt}) {
  return (
    <button
      type="button"
      onClick={() => console.log("I could toggle a profile!")}
      aria-label="toggle profile"
    >
    <Image />
    </button>
  );
}
