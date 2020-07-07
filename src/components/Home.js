import React from "react";
import { Link } from "react-router-dom";
import { Title, Description, ShopImage, NavButton } from "../styles";
//  logo
import fabric from "../FabricLogo.png";

const Home = () => {
  return (
    <>
      <Link to="/Fabic">
        <NavButton>Fabic</NavButton>{" "}
      </Link>
      <Title>My Shop</Title>
      <Description>Fabric Shop</Description>
      <ShopImage src={fabric} alt="Logo" />
    </>
  );
};

export default Home;
