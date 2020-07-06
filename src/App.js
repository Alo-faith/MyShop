import React, { useState } from "react";
//  logo
import fabric from "./FabricLogo.png";

//  style

// Detailes
import ItemDetails from "./components/ItemDetails";

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

import items from "./items";
import List from "./components/FabricList";

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
  const [currentTheme, setCurrentTheme] = useState("light");
  const [item, setItem] = useState(null);
  const [_items, setItems] = useState(items);

  const toggleTheme = () => {
    setCurrentTheme(
      currentTheme === "light"
        ? "dark"
        : currentTheme === "dark"
        ? "grey"
        : "light"
    );
  };

  const deleteItem = (itemId) => {
    const updatedItem = _items.filter((item) => item.id !== +itemId);
    setItems(updatedItem);
    setItem(null);
  };

  const selectItem = (itemId) => {
    const selectedItem = items.find((item) => item.id === itemId);
    setItem(selectedItem);
  };

  const setView = () =>
    item ? (
      <ItemDetails item={item} deleteItem={deleteItem} />
    ) : (
      <List items={_items} deleteItem={deleteItem} selectItem={selectItem} />
    );

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <TheamButton onClick={toggleTheme}>
        {theme[currentTheme].buttonText}
      </TheamButton>
      <Title>My Shop</Title>
      <Description>Fabric Shop</Description>
      <ShopImage src={fabric} alt="Logo" />
      {/* 
      <ItemDetailes item={item} />
      <FabricList items={_items} setItem={setItem} deleteItem={deleteItem} /> */}

      {setView()}
    </ThemeProvider>
  );
}
export default App;
