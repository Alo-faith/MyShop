import React from "react";

//  logo
import fabric from "../../FabricLogo.png";

// style
import { Description, ShopImage } from "./styles";
import { Title } from "../../styles";

const Home = () => {
  return (
    <>
      <Title>My Shop</Title>

      <ShopImage src={fabric} alt="Logo" />
    </>
  );
};

export default Home;
