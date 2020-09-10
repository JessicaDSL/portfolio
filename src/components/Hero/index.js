import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaCode } from 'react-icons/fa';
import { StyledBurguer, List, Nav, Logo } from "./styles";



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
    <List open={open}>
      <li>
        <Link to={`/`}>
          <h1>HOME</h1>
        </Link>
      </li>
      <li>
        <Link to={`/layout`}>
          <h1>LAYOUTS</h1>
        </Link>
      </li>
      <li>
        <Link to={`/contact`}>
          <h1>CONTACT</h1>
        </Link>
      </li>
    </List>
  );
};

const Hero = () => {
  return (
    <Nav>
      <Logo>
        <h1><span><FaCode /></span>Jessy</h1>
      </Logo>
      <Burguer />
    </Nav>
  );
};

export default Hero;
