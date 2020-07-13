import React from "react";
import { Link } from "react-router-dom";

//  Component
import DeleteButton from "./buttons/DeleteButton";

// style
import { FWrapper } from "../styles";

const FabricItem = ({ item }) => {
  return (
    <FWrapper layout="flexbox">
      <Link to={`/fabric/${item.url}`}>
        <img src={item.image} alt={item.name} />
      </Link>

      <p> {item.name} </p>
      <p className="item-price">{item.price} KD/ PER METRE</p>

      <DeleteButton itemId={item.id} />
    </FWrapper>
  );
};
export default FabricItem;
