import React from "react";
import { ListWrapper, FWrapper, Description, NavButton } from "../styles";

import DeleteButton from "./buttons/DeleteButton";

import { useParams, Link } from "react-router-dom";

const ItemDetails = (props) => {
  // const item = props.item;
  const { itemId } = useParams();

  const item = props.items.find((item) => item.id === +itemId);

  return (
    <>
      <Link to="/Fabic">
        <NavButton>Back</NavButton>{" "}
      </Link>
      <ListWrapper>
        <FWrapper>
          <img src={item.image} alt={item.name} />
          <Description>{item.name}</Description>
          <p>{item.description}</p>
          <p>{item.price} KD</p>

          <DeleteButton itemId={item.id} deleteItem={props.deleteItem} />
        </FWrapper>
      </ListWrapper>
    </>
  );
};

export default ItemDetails;
