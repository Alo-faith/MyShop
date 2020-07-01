import React, { useState } from "react";

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

import { ThemeProvider } from "styled-components";

const theme = {
  light: {
    mainColor: "#011627", // main font color
    backgroundColor: "4ecdc4", // main background color
    blue: "#003049",
  },
  dark: {
    mainColor: "#4ecdc4", // main font color
    backgroundColor: "#011627", // main background color
    blue: "#edf6f9",
  },
};

function App() {
  let [currentTheme, setCurrentTheme] = useState("light");
  let [currentTitle, setCurrentTitle] = useState("Dark Mode");
  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  const ButtonText = currentTheme === "light" ? "Dark Mode" : "Light Mode";
  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <TheamButton onClick={toggleTheme}>{ButtonText}</TheamButton>
      <Title>My Shop</Title>
      <Description>Fabric Shop</Description>
      <ShopImage
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSo-PntIuXIppR191nUWNoPjY1mYrl29BBwuA&usqp=CAU"
        alt="Logo"
      />
      <br />
      <FabricList />
    </ThemeProvider>
  );
}
export default App;
