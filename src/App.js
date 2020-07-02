import React, { useState } from "react";
//  logo
import fabric from "./FabricLogo.png";

//  style
import {
  GlobalStyle,
  Description,
  ShopImage,
  Title,
  TheamButton,
} from "./styles";

// Components
import FabricList from "./components/FabricList";

// Them
import { ThemeProvider } from "styled-components";

const theme = {
  light: {
    mainColor: "#011627", // main font color
    backgroundColor: "#fffffc", // main background color
    blue: "#003049",
    head: "#003049",
    buttonText: "Dark Mode",
  },
  dark: {
    mainColor: "#4ecdc4", // main font color
    backgroundColor: "#011627", // main background color
    blue: "#edf6f9",
    head: "#fffffc",
    buttonText: "Grey Mode",
  },

  grey: {
    mainColor: "#4ecdc4", // main font color
    backgroundColor: "#5c677d", // main background color
    blue: "#edf6f9",
    head: "#ffbf69",
    buttonText: "Light Mode",
  },
};

function App() {
  let [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () => {
    // if (currentTheme === "light") setCurrentTheme("dark");
    // else if (currentTheme === "dark") setCurrentTheme("grey");
    // else setCurrentTheme("light");

    setCurrentTheme(
      currentTheme === "light"
        ? "dark"
        : currentTheme === "dark"
        ? "grey"
        : "light"
    );
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />

      <TheamButton onClick={toggleTheme}>
        {theme[currentTheme].buttonText}
      </TheamButton>

      <Title>My Shop</Title>

      <Description>Fabric Shop</Description>

      <ShopImage src={fabric} alt="Logo" />

      <FabricList />
    </ThemeProvider>
  );
}
export default App;
