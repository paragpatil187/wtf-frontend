import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Background,
} from "./css/NavbarCss";

const Navbar = () => {
  return (
    <>
    <div style={{width : "100%",position:"relative"}}>
    <img
        src="https://dry2o5w6nqoyb.cloudfront.net/gym_upload/W6VsdPXPwdlSX/1658305692799-wp7959659.webp"
        alt=""
        srcset=""

        style={{width : "100%",height:"auto",objectFit:"contain"}}
      />

   
      <div style={{position:"absolute",zIndex:"1",height:"100%",width:"100vw",top:"0",left:"0"}}>
      <Nav style={{position:"sticky",top:"10px", borderBottom:"1px solid gray"}}>
        
        <img
          src="https://dry2o5w6nqoyb.cloudfront.net/gym_upload/W6VsdPXPwdlSX/1658305692799-wp7959659.webp"
          alt=""
          srcset=""
          style={{marginLeft:"-100px"}}
        />
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
      </div>
      </div>
    </>
  );
};

export default Navbar;