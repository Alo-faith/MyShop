import React from "react";
import {
  DeleteButtonStyled,
  ListWrapper,
  FWrapper,
  Description,
} from "../styles";

const ItemDetails = (props) => {
  const item = props.item;

  const handleDelete = () => {
    props.deleteItem(item.id);
  };

  return (
    <ListWrapper>
      <FWrapper>
        <img src={item.image} alt={item.name} />
        <Description>{item.name}</Description>
        <p>{item.description}</p>
        <p>{item.price} KD</p>

        <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
      </FWrapper>
    </ListWrapper>
  );
};

export default ItemDetails;
