import React, { useState } from "react";
import { Route, Switch } from "react-router";

// Detailes
import ItemDetails from "./components/ItemDetails";

// //  style
import { GlobalStyle } from "./styles";

// Components
import items from "./items";
import List from "./components/FabricList";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

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
  const [_items, setItems] = useState(items);

  const toggleTheme = (event) => {
    setCurrentTheme(event === "1" ? "light" : event === "2" ? "dark" : "grey");
  };

  const deleteItem = (itemId) => {
    const updatedItem = _items.filter((item) => item.id !== +itemId);
    setItems(updatedItem);
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />

      <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />

      <Switch>
        <Route path="/fabric/:itemUrl">
          <ItemDetails items={_items} deleteItem={deleteItem} />
        </Route>

        <Route path="/fabric">
          <List items={_items} deleteItem={deleteItem} />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}
export default App;
