import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";

// Modal
import FabricModal from "../modals/FabicModal";

// Styles
import { AddButtonStyle } from "./styles";

const AddButton = () => {
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
      <FabricModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default AddButton;
