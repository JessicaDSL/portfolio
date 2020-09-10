import React from "react";

import { Container, Main, Section, View, Mask } from "./styles";
import Notify from "../../assets/image/layout/notify.png";
import CarStore from "../../assets/image/layout/carstore.png";
import Donaty from "../../assets/image/layout/donaty.png";

const Layout = () => {
  return (
    <Container>
      <Main>
        <div>
          <h1>LAYOUT</h1>
          <hr />
        </div>

        <Section>
          <div>
            <img src={Notify} alt="" />
          </div>
          <div>
            <img src={CarStore} alt="" />
          </div>
          <div>
            <img src={Donaty} alt="" />
          </div>
        </Section>
      </Main>
    </Container>
  );
};

export default Layout;
