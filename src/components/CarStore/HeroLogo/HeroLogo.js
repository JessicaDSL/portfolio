import React from "react";
import { FaMobileAlt } from "react-icons/fa";

import { Container, Content } from "./styles";

const HeroLogo = () => {
  return (
    <Container>
      <Content>
        <h1>
          Car<span>Store</span>
        </h1>

        <h4>Best Car Seller</h4>
      </Content>
      <Content>
        <b>
          <span>
            <FaMobileAlt />
          </span>
          +123 456 7890
        </b>

        <p>Mon-Fri: 8:30am-7:30pm; Sat-Sun: 9:30am-4:30pm</p>
      </Content>
    </Container>
  );
};

export default HeroLogo;
