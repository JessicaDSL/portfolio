import React from "react";

import { Container, Content, Line } from "./styles";
import HeroLogo from "../HeroLogo";
import HeaderSearch from "../HeaderSearch";
import HeaderNav from "../HeaderNav";
import ShoppingStore from "../ShoppingStore";

const HeaderSection = () => {
  return (
    <Container>
      <HeaderSearch />

      <div>
        <Line></Line>
      </div>

      <Content>
        <HeroLogo />

        <ShoppingStore />
      </Content>

      <HeaderNav />
    </Container>
  );
};

export default HeaderSection;
