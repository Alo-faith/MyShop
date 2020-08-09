import React from "react";
import { observer } from "mobx-react";

// Stores
import itemStore from "../../stores/itemStore";
// style
import { DeleteButtonStyled } from "./styles";
import shopStore from "../../stores/shopStore";

const DeleteButton = ({ shopId, itemId }) => {
  const handleDelete = () => {
    if (itemId) {
      itemStore.deleteItem(itemId);
      // history.push("/fabrics");
    } else {
      shopStore.deleteShop(shopId);
      // history.push("/shops");
    }
  };
  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default observer(DeleteButton);
