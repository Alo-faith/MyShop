import React from "react";
import { observer } from "mobx-react";

import { Link } from "react-router-dom";

//  Component
import DeleteButton from "../buttons/DeleteButton";
import UpdateButton from "../buttons/UpdateButton";

// style
import { FWrapper } from "./styles";

const FabricItem = ({ item }) => {
  return (
    <FWrapper layout="flexbox">
      <Link to={`/fabric/${item.url}`}>
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