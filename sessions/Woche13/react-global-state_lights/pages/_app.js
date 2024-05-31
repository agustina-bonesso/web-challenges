import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import Light from "@/components/Light";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState([
    { id: 0, name: "Living Room", isOn: false },
    { id: 1, name: "Kitchen", isOn: false },
    { id: 2, name: "Bedroom", isOn: false },
    { id: 3, name: "Bathroom", isOn: false },
    { id: 4, name: "Garage", isOn: false },
    { id: 5, name: "Porch", isOn: false },
    { id: 6, name: "Garden", isOn: false },
    { id: 7, name: "Office", isOn: false },
  ]);

  function handleToggleLight(id) {

    setLights(
      lights.map((light) =>
        // ternary operator: condition ? if true : if false;
        light.id === id ? { ...light, isOn: !light.isOn } : light
      )
    );
  }
  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        onToggleLight={handleToggleLight}
      />
    </Layout>
  );
}
