import React from "react";
import { Link, NavLink } from "react-router-dom";

// style
import { NavStyled, Logo, TheamButton, NavButton, NavItem } from "../styles";

//  logo
import fabric from "../FabricLogo.png";

const NavBar = ({ currentTheme, toggleTheme }) => {
  return (
    <NavStyled className="navbar navbar-expand-lg ">
      <Logo className="navbar-brand" to="/">
        <img src={fabric} />
      </Logo>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <NavItem className="nav-item" to="/fabric">
            Fabirc
          </NavItem>

          <TheamButton className="nav-item" onClick={toggleTheme}>
            {currentTheme === "light"
              ? "Dark"
              : currentTheme === "dark"
              ? "Grey"
              : "light"}{" "}
            Mode
          </TheamButton>
        </div>
      </div>
    </NavStyled>
  );
};

export default NavBar;
