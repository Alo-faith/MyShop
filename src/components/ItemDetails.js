import React from "react";
import {
  DeleteButtonStyled,
  ListWrapper,
  FWrapper,
  Description,
} from "../styles";

import DeleteButton from "./buttons/DeleteButton";

const ItemDetails = (props) => {
  const item = props.item;

  // const handleDelete = () => {
  //   props.deleteItem(item.id);
  // };

  return (
    <ListWrapper>
      {/* <p onClick={() => props.stItem()}>Back</p> */}
      <FWrapper>
        <img src={item.image} alt={item.name} />
        <Description>{item.name}</Description>
        <p>{item.description}</p>
        <p>{item.price} KD</p>

        <DeleteButton itemId={item.id} deleteItem={props.deleteItem} />
      </FWrapper>
    </ListWrapper>
  );
};

export default ItemDetails;
