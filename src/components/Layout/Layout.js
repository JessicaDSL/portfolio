import React from "react";
import { Link } from "react-router-dom";

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
            <Link to="/notify">
              <img src={Notify} alt="" />
            </Link>
          </div>
          <div>
            <Link to="/carstore">
              <img src={CarStore} alt="" />
            </Link>
          </div>
          <div>
            <Link to="/auti">
              <img src={Donaty} alt="" />
            </Link>
          </div>
        </Section>
      </Main>
    </Container>
  );
};

export default Layout;
