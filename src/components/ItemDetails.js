import React from "react";
import { useParams, Link } from "react-router-dom";

// component
import DeleteButton from "./buttons/DeleteButton";

// style
import { ListWrapper, FWrapper, Description, NavButton } from "../styles";

const ItemDetails = (props) => {
  // const { itemId } = useParams();
  // const item = props.items.find((item) => item.id === +itemId);

  const { itemUrl } = useParams();
  const selectedItem = props.items.find((item) => item.url === itemUrl);
  const item = props.items.find((item) => item.id === selectedItem.id);

  return (
    <>
      <Link to="/Fabic">
        <NavButton>Back</NavButton>{" "}
      </Link>

      <ListWrapper>
        <FWrapper>
          <Description>{item.name}</Description>

          <img src={item.image} alt={item.name} />

          <p>{item.description}</p>
          <p>{item.price} KD/ PER METRE</p>

          <DeleteButton itemId={item.id} deleteItem={props.deleteItem} />
        </FWrapper>
      </ListWrapper>
    </>
  );
};

export default ItemDetails;
