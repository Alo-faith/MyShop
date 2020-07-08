import React from "react";

// style
import { DeleteButtonStyled } from "../../styles";

const DeleteButton = ({ itemId, deleteItem }) => {
  const handleDelete = () => {
    deleteItem(itemId);
  };
  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;
