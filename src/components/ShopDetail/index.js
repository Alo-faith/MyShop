import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { observer } from "mobx-react";

// Stores
import shopStore from "../../stores/shopStore";
import itemStore from "../../stores/itemStore";

// component
import DeleteButton from "../buttons/DeleteButton";
import UpdateButton from "../buttons/UpdateButton";
import List from "../FabricList";
import AddButton from "../buttons/AddButton";

// style
import { FWrapper, Description } from "./styles";
import authStore from "../../stores/authStore";

const ShopDetail = () => {
  const { shopSlug } = useParams();

  if (!authStore.user) return <Redirect to="/signin" />;

  const shop = shopStore.shops.find((shop) => shop.slug === shopSlug);

  if (!shop) return <Redirect to="/shops" />;
  const fabrics = shop.fabrics
    ? shop.fabrics
        .map((fabric) => itemStore.getItemById(fabric.id))
        .filter((fabric) => fabric)
    : [];

  return (
    <>
      <FWrapper>
        <Description>{shop.name}</Description>
        <img src={shop.image} alt={shop.name} />
        {/* <UpdateButton oldShop={shop} />
        <DeleteButton shopId={shop.id} /> */}
      </FWrapper>

      <List fabrics={fabrics} />
      <AddButton shop={shop} />
    </>
  );
};

export default observer(ShopDetail);
