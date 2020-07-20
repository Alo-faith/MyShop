import React from "react";
import { useParams, Redirect } from "react-router-dom";
import { observer } from "mobx-react";

// Stores
import itemStore from "../../stores/itemStore";

// component
import DeleteButton from "../buttons/DeleteButton";
import UpdateButton from "../buttons/UpdateButton";

// style
import { FWrapper, Description } from "./styles";

const ItemDetails = () => {
  const { itemSlug } = useParams();
  const item = itemStore.items.find((item) => item.slug === itemSlug);

  if (!item) return <Redirect to="/fabric" />;

  return (
    <>
      <FWrapper>
        <Description>{item.name}</Description>

        <img src={item.image} alt={item.name} />
        <p>{item.description}</p>
        <p>{item.price} KD/ PER METRE</p>

        <UpdateButton oldItem={item} />
        <DeleteButton itemId={item.id} />
      </FWrapper>
    </>
  );
};

export default observer(ItemDetails);
