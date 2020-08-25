import React, { useState } from "react";
import { Link } from "react-router-dom";

import { StyledBurguer, Ul, Nav, Btn, Logo } from "./styles";

import Icone from "../../assets/image/icone-5.png";

const Burguer = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurguer open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </StyledBurguer>
      <RightNav open={open} />
    </>
  );
};

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <Link to={`/`}>
          <Btn>HOME</Btn>
        </Link>
      </li>
      <li>
        <Link to={`/layout-page`}>
          <Btn>LAYOUTS</Btn>
        </Link>
      </li>
      <li>
        <Link to={`/contact-page`}>
          <Btn>CONTACT</Btn>
        </Link>
      </li>
    </Ul>
  );
};

const Hero = () => {
  return (
    <Nav>
      <Logo>
        <img src={Icone} alt="logo" />
        <h1>Jessy</h1>
      </Logo>
      <Burguer />
    </Nav>
  );
};

export default Hero;
