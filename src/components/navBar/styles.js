import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const NavItem = styled(NavLink)`
  padding: 0.25em 1em;
  color: ${(props) => props.theme.head};
  text-align: center;
  padding-top: 5px;
  font-weight: bold;

  display: inline-block;
  font-size: 20px;

  &.active {
    color: #e85d04;
  }
`;

export const NavStyled = styled.nav`
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const Logo = styled(Link)`
  padding: 0px;

  img {
    width: 140px;
  }
`;
export const UsernameStyled = styled.p`
  padding: 0.25em 1em;
`;
