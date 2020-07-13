import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import FabricModal from "../modals/FabicModal";

const AddButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <AiFillPlusCircle
        className="float-right"
        size="2em"
        onClick={() => setIsOpen(true)}
      />
      <FabricModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default AddButton;
