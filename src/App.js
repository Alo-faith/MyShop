import React, { useState } from "react";
import { Route, Switch } from "react-router";
import { Helmet } from "react-helmet";
import Favicon from "./logo.png";

// Detailes
import ItemDetails from "./components/fabricDetails";

// //  style
import { GlobalStyle } from "./styles";

// Components
import List from "./components/fabricList";
import Home from "./components/home";
import NavBar from "./components/navBar";

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
  const savedTheme = localStorage.getItem("theme") ?? "light";
  const [currentTheme, setCurrentTheme] = useState(savedTheme);

  const toggleTheme = (event) => {
    const newTheme = event === "1" ? "light" : event === "2" ? "dark" : "grey";
    setCurrentTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Fabric Shop</title>
        <link rel="canonical" href={Favicon} />
      </Helmet>

      <ThemeProvider theme={theme[currentTheme]}>
        <GlobalStyle />

        <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />

        <Switch>
          <Route path="/fabric/:itemSlug">
            <ItemDetails />
          </Route>

          <Route path="/fabric">
            <List />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </ThemeProvider>
    </>
  );
}
export default App;
