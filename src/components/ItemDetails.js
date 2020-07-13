import React from "react";
import { useParams, Link, Redirect } from "react-router-dom";
import { observer } from "mobx-react";

// Stores
import itemStore from "../stores/itemStore";

// component
import DeleteButton from "./buttons/DeleteButton";

// style
import { ListWrapper, FWrapper, Description } from "../styles";

const ItemDetails = () => {
  const { itemUrl } = useParams();
  const item = itemStore.items.find((item) => item.url === itemUrl);

  if (!item) return <Redirect to="/fabric" />;

  return (
    <>
      <ListWrapper>
        <FWrapper>
          <Description>{item.name}</Description>

          <img src={item.image} alt={item.name} />
          <p>{item.description}</p>
          <p>{item.price} KD/ PER METRE</p>

          <DeleteButton itemId={item.id} />
        </FWrapper>
      </ListWrapper>
    </>
  );
};

export default observer(ItemDetails);
