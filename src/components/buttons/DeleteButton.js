import React from "react";
import { observer } from "mobx-react";

// Stores
import itemStore from "../../stores/itemStore";
// style
import { DeleteButtonStyled } from "./styles";

const DeleteButton = ({ itemId }) => {
  const handleDelete = () => {
    itemStore.deleteItem(itemId);
  };
  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default observer(DeleteButton);
