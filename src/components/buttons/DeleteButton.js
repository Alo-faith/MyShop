import React from "react";

// style
import { DeleteButtonStyled } from "../../styles";
import { useHistory } from "react-router-dom";

const DeleteButton = (props) => {
  const history = useHistory();

  const handleDelete = () => {
    props.deleteItem(props.itemId);
    history.push("/Fabic");
  };
  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;
