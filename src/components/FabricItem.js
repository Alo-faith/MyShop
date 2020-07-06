import React from "react";

// style
import { FWrapper, DeleteButtonStyled } from "../styles";

const FabricItem = (props) => {
  const item = props.item;

  const handleDelete = () => {
    props.deleteItem(item.id);
  };
  return (
    <FWrapper>
      <img
        src={item.image}
        alt={item.name}
        onClick={() => props.selectItem(item.id)}
      />
      <p> {item.name} </p>
      <p className="item-price">{item.price} KD/ PER METRE</p>

      <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
    </FWrapper>
  );
};
export default FabricItem;
