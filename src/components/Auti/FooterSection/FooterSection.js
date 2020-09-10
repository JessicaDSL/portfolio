import React from "react";

import LogoTriangle from "../../../assets/image/auti/logo/logo1.png";
import Logo from "../../../assets/image/auti/logo/logo2.png";
import { Container } from "./styles";

const FooterSection = () => {
  return (
    <Container>
      <div>
        <img src={LogoTriangle} alt="logo1" />
        <img src={Logo} alt="logo2" />
      </div>
    </Container>
  );
};

export default FooterSection;
