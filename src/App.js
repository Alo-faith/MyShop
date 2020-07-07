import React, { useState } from "react";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
// Detailes
import ItemDetails from "./components/ItemDetails";

//  style
import { GlobalStyle, TheamButton } from "./styles";

// Components
import items from "./items";
import List from "./components/FabricList";
import Home from "./components/Home";
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
  const [currentTheme, setCurrentTheme] = useState("light");
  // const [item, setItem] = useState(null);
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
  };

  // const selectItem = (itemId) => {
  //   const selectedItem = items.find((item) => item.id === itemId);
  //   setItem(selectedItem);
  // };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <TheamButton onClick={toggleTheme}>
        {theme[currentTheme].buttonText}
      </TheamButton>

      <Switch>
        <Route path="/Fabic/:itemId">
          <ItemDetails items={_items} deleteItem={deleteItem} />
        </Route>

        <Route path="/Fabic">
          <List items={_items} deleteItem={deleteItem} />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}
export default App;
