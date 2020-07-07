import React from "react";

// style
import { FWrapper } from "../styles";

import DeleteButton from "./buttons/DeleteButton";

const FabricItem = (props) => {
  const item = props.item;

  return (
    <FWrapper>
      <img
        src={item.image}
        alt={item.name}
        onClick={() => props.selectItem(item.id)}
      />
      <p> {item.name} </p>
      <p className="item-price">{item.price} KD/ PER METRE</p>

      <DeleteButton itemId={item.id} deleteItem={props.deleteItem} />
    </FWrapper>
  );
};
export default FabricItem;
