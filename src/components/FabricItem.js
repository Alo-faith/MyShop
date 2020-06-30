import React from "react";

// style
import { FWrapper } from "../styles";

const FabricItem = (props) => {
  const item = props.item;
  // const { item } = props;
  return (
    <FWrapper>
      <img src={item.image} alt={item.name} />
      <p> {item.name} </p>

      <p className="item-price">{item.price} KD/ PER METRE</p>
    </FWrapper>
  );
};
export default FabricItem;
