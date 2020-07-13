import React, { useState } from "react";

// Modal
import FabricModal from "../modals/FabicModal";

// Styling
import { UpdateButtonStyled } from "../../styles";

const UpdateButton = ({ oldItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>
      <FabricModal isOpen={isOpen} closeModal={closeModal} oldItem={oldItem} />
    </>
  );
};

export default UpdateButton;
