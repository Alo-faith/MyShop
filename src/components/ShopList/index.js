import React, { useState } from "react";
import { observer } from "mobx-react";
import { Redirect } from "react-router-dom";

// styles
import { Title } from "../../styles";
import { ListWrapper } from "./styles";

// Store
import shopStore from "../../stores/shopStore";
import authStore from "../../stores/authStore";

// component
import ShopItem from "./ShopItem";
import SearchBar from "../SearchBar";
import AddButton from "../buttons/AddButton";

const ShopList = () => {
  const [query, setQuery] = useState("");

  if (!authStore.user || authStore.user.role !== "admin")
    return <Redirect to="/" />;

  const filterShop = shopStore.shops.filter((shop) =>
    shop.name.toLocaleUpperCase().includes(query.toLocaleUpperCase())
  );
  const shopList = filterShop.map((shop) => (
    <ShopItem shop={shop} key={shop.id} />
  ));
  return (
    <div className="container">
      <Title> shops</Title>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{shopList} </ListWrapper>
      <AddButton />
    </div>
  );
};
export default observer(ShopList);
