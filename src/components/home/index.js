import React from "react";
import { Redirect } from "react-router-dom";
import { observer } from "mobx-react";

//  logo
import fabric from "../../FabricLogo.png";

// style
import { Description, ShopImage } from "./styles";
import { Title } from "../../styles";

// Store
import authStore from "../../stores/authStore";

const Home = () => {
  if (!authStore.user) return <Redirect to="/signin" />;

  if (authStore.user.shopSlug)
    return <Redirect to={`shops/${authStore.user.shopSlug} `} />;

  return (
    <>
      <Title>My Shop</Title>

      <ShopImage src={fabric} alt="Logo" />
    </>
  );
};

export default observer(Home);
