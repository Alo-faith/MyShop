import React from "react";

//  style
import { GlobalStyle, Description, ShopImage, Title } from "./styles";

// Components
import FabricList from "./components/FabricList";

import { ThemeProvider } from "styled-components";

const theme = {
  mainColor: "#011627", // main font color
  backgroundColor: "4ecdc4", // main background color
  blue: "#003049",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Title>My Shop</Title>
      <Description>Fabric Shop</Description>

      <ShopImage
        src="https://lh3.googleusercontent.com/proxy/7Hjud42uEuz3JhHOYFIWwEw4ZhO34P6m5hF2YSMLQVA4Jf_-UdJTUtEbBn_D4PZY0pnbezXoJ4iE22aGauUCtbB8r0CKZ2TjzWunXTsLUmPYi3lQtBMRTytDd0W30tlglVc7"
        alt="Logo"
      />
      <br />

      <FabricList />
    </ThemeProvider>
  );
}
export default App;
