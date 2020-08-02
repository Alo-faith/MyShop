import React, { useState } from "react";

// Modal
import FabricModal from "../modals/FabicModal";
import ShopModal from "../modals/ShopModal";

// Styling
import { UpdateButtonStyled } from "./styles";

const UpdateButton = ({ oldItem, oldShop }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>
      {oldItem ? (
        <FabricModal
          isOpen={isOpen}
          closeModal={closeModal}
          oldItem={oldItem}
        />
      ) : (
        <ShopModal isOpen={isOpen} closeModal={closeModal} oldShop={oldShop} />
      )}
    </>
  );
};

export default UpdateButton;
