import React, { useState } from "react";
import { AuthButtonStyled } from "./styles";
//  Modal
import SigninModal from "../../components/modals/SigninModal";

const SigninButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <AuthButtonStyled onClick={openModal}>Sign in</AuthButtonStyled>
      <SigninModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default SigninButton;
