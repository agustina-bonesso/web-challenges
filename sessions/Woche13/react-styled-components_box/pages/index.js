import BoxWithStyledComponents from "@/components/BoxWithClassName/BoxWithStyledComponents.js";
import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";

export default function HomePage() {
  return (
    <div>
      <BoxWithStyledComponents $isBlack></BoxWithStyledComponents>
      <BoxWithStyledComponents></BoxWithStyledComponents>

    </div>
  );
}
