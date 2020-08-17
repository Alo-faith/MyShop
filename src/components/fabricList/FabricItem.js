import React from "react";
import { observer } from "mobx-react";

import { Link } from "react-router-dom";

//  Component
import DeleteButton from "../buttons/DeleteButton";
import UpdateButton from "../buttons/UpdateButton";

// style
import { FWrapper } from "./styles";

// store
import authStore from "../../stores/authStore";

const FabricItem = ({ item }) => {
  //  const items = shop.items.map((item) => itemStore.getItemById(item.id));
  // console.log(items);
  return (
    <FWrapper layout="flexbox">
      <Link to={`/fabrics/${item.slug}`}>
        <img src={item.image} alt={item.name} />
      </Link>

      <p> {item.name} </p>
      <p className="item-price">{item.price} KD/ PER METRE</p>
      <UpdateButton oldItem={item} />
      <DeleteButton itemId={item.id} />
    </FWrapper>
  );
};
export default observer(FabricItem);
