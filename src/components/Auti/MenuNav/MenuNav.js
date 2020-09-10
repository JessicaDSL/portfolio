import React from "react";

import LogoTriangle from "../../../assets/image/auti/logo/logo1.png";
import Logo from "../../../assets/image/auti/logo/logo2.png";

import { Container, Menu } from "./styles";

const MenuNav = () => {
  return (
    <Container>
      <div>
        <img src={LogoTriangle} alt="logo1" />
        <img src={Logo} alt="logo2" />
      </div>

      <Menu>
        <h2>How It Works </h2>
        <h2>Common Questions</h2>
      </Menu>
    </Container>
  );
};

export default MenuNav;
