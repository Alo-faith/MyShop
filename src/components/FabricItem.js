import React from "react";

// style
import { FWrapper } from "../styles";

import DeleteButton from "./buttons/DeleteButton";
import { Link } from "react-router-dom";

const FabricItem = (props) => {
  const item = props.item;

  return (
    <FWrapper>
      <Link to={`/Fabic/${item.id}`}>
        <img src={item.image} alt={item.name} />
      </Link>
      <p> {item.name} </p>
      <p className="item-price">{item.price} KD/ PER METRE</p>

      <DeleteButton itemId={item.id} deleteItem={props.deleteItem} />
    </FWrapper>
  );
};
export default FabricItem;
