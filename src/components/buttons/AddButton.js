import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import FabicModal from "../modals/FabicModal";

const AddButton = ({ createFabric }) => {
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
      <FabicModal
        isOpen={isOpen}
        closeModal={closeModal}
        createFabric={createFabric}
      />
    </>
  );
};

export default AddButton;
