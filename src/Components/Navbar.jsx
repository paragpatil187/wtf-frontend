import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./css/NavbarCss";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink to="/fitness" activeStyle>
            Fitness
          </NavLink>
          <NavLink to="/nutrition" activeStyle>
            Nutrition
          </NavLink>
          <NavLink to="/gyms" activeStyle>
            Gyms
          </NavLink>
          <NavLink to="/becomewtfpartner" activeStyle>
            Become WTF Partner
          </NavLink>
          <NavLink to="/about" activeStyle>
            About Us
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/login">Login</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
