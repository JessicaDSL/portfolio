import React, { useState } from "react";
import { BsFillHeartFill } from "react-icons/bs";
import MenuIcon from "@mui/icons-material/Menu";
import { CgFormatSlash } from "react-icons/cg";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import { Container, Logo, Nav, MenuDropdow, List, Content } from "./styles";

const Header = () => {
  const [state, setState] = useState(false);
  return (
    <Container>
      <Content>
        <a href="#home">
          <Logo>
            <MdKeyboardArrowLeft />
            <BsFillHeartFill style={{ color: "#fd4370" }} />
            <b>
              <CgFormatSlash />
            </b>
            <span>
              <MdKeyboardArrowRight />
            </span>
          </Logo>
        </a>
        <MenuDropdow className="dropdown">
          <button onClick={() => (state ? setState(false) : setState(true))}>
            <MenuIcon />
          </button>
          <List onClick={() => setState(false)} state={state}>
            <a href="#about">
              <li>About me </li>
            </a>

            <a href="#portfolio">
              <li>Portfolio</li>
            </a>
            <a href="#contact">
              <li>Connect</li>
            </a>
          </List>
        </MenuDropdow>
        <Nav>
          <ul>
            <a href="#about">
              <li>About me</li>
            </a>
            <span>|</span>
            <a href="#portfolio">
              <li>Portfolio</li>
            </a>
            <span>|</span>
            <a href="#contact">
              <li>Connect</li>
            </a>
          </ul>
        </Nav>
      </Content>
    </Container>
  );
};

export default Header;
