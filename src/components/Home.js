import React from "react";
import { Link } from "react-router-dom";

//  logo
import fabric from "../FabricLogo.png";

// style
import { Title, Description, ShopImage, NavButton } from "../styles";

const Home = () => {
  return (
    <>
      <Title>My Shop</Title>
      <Description>Fabric Shop</Description>
      <ShopImage src={fabric} alt="Logo" />
    </>
  );
};

export default Home;
