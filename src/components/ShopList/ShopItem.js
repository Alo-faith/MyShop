import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

// styles
import { ShopImage, FWrapper } from "./styles";

// component
import DeleteButton from "../buttons/DeleteButton";
import UpdateButton from "../buttons/UpdateButton";

const ShopItem = ({ shop }) => {
  return (
    <FWrapper layout="flexbox">
      <Link to={`/shops/${shop.slug}`}>
        <ShopImage src={shop.image} alt={shop.name} />
        <p>{shop.name}</p>
      </Link>
      <UpdateButton oldShop={shop} />
      <DeleteButton shopId={shop.id} />
    </FWrapper>
  );
};
export default observer(ShopItem);
