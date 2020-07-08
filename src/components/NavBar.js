import React from "react";
import { Link, NavLink } from "react-router-dom";

// style
import { NavStyled, Logo, NavItem } from "../styles";

//  logo
import fabric from "../FabricLogo.png";

const NavBar = ({ toggleTheme }) => {
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

          <select
            class="custom-select"
            defaultValue="1"
            onChange={(e) => toggleTheme(e.target.value)}
          >
            <option value="1">Light Mode</option>
            <option value="2">Dark Mode</option>
            <option value="3">Grey Mode</option>
          </select>
        </div>
      </div>
    </NavStyled>
  );
};

export default NavBar;
