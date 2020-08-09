import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";

// Modal
import FabricModal from "../modals/FabicModal";
import ShopModal from "../modals/ShopModal";
// Styles
import { AddButtonStyle } from "./styles";

const AddButton = ({ shop }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <AddButtonStyle>
        <AiFillPlusCircle
          className="float-right"
          size="2em"
          onClick={() => setIsOpen(true)}
        />
      </AddButtonStyle>
      {shop ? (
        <FabricModal shop={shop} isOpen={isOpen} closeModal={closeModal} />
      ) : (
        <ShopModal isOpen={isOpen} closeModal={closeModal} />
      )}
    </>
  );
};

export default AddButton;
