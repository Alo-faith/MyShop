import React, { useState } from "react";
import { observer } from "mobx-react";

// Loading
import ReactLoading from "react-loading";

//  style
import { GlobalStyle, LoadingStyle } from "./styles";

// Components
import NavBar from "./components/navBar";
import Routes from "./components/Routes";

// Stores
import shopStore from "./stores/shopStore";

// Them
import { ThemeProvider } from "styled-components";
import itemStore from "./stores/itemStore";

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

  const Loading = () => (
    <ReactLoading type={"bars"} color={"black"} height={200} width={200} />
  );
  return (
    <>
      <ThemeProvider theme={theme[currentTheme]}>
        <GlobalStyle />
        <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />
        {shopStore.loading || itemStore.loading ? (
          <LoadingStyle>
            <Loading />
          </LoadingStyle>
        ) : (
          <Routes />
        )}
      </ThemeProvider>
    </>
  );
}
export default observer(App);
