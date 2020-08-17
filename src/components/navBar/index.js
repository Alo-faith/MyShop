import React, { useState } from "react";
import { observer } from "mobx-react";
import { FiLogOut } from "react-icons/fi";

//  Component
import SignupButton from "../buttons/SignupButton";
import SigninButton from "../buttons/SigninButton";
import Home from "../Home";

// style
import { NavStyled, Logo, NavItem, UsernameStyled } from "./styles";

//  logo
import fabric from "../../FabricLogo.png";

// store
import authStore from "../../stores/authStore";
// modal
import ShopModal from "../modals/ShopModal";

const NavBar = ({ toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <NavStyled className="navbar navbar-expand-lg ">
        <Logo className="navbar-brand" to="/">
          <img src={fabric} alt="fabric" />
        </Logo>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            {authStore.user?.role === "admin" && (
              <>
                <NavItem className="nav-item" to="/shops">
                  shops
                </NavItem>

                <NavItem className="nav-item" to="/fabrics">
                  Fabirc
                </NavItem>
              </>
            )}
            {authStore.user && !authStore.user.shopSlug && (
              <UsernameStyled onClick={openModal}>Create Shop</UsernameStyled>
            )}
            <ShopModal isOpen={isOpen} closeModal={closeModal} />

            <select
              className="custom-select"
              defaultValue="1"
              onChange={(e) => toggleTheme(e.target.value)}
            >
              <option value="1">Light Mode</option>
              <option value="2">Dark Mode</option>
              <option value="3">Grey Mode</option>
            </select>
          </div>
        </div>
        {authStore.user && (
          <>
            <UsernameStyled>Hello, {authStore.user.username}</UsernameStyled>
            <FiLogOut onClick={authStore.signout} size="2em" color="red" />
          </>
        )}
      </NavStyled>
    </>
  );
};

export default observer(NavBar);
