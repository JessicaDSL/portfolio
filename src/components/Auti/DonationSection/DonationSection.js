import React from "react";

import Box from "../../../assets/image/auti/boxFood.png";
import { Container, Content, Count } from "./styles";

const DonationSection = () => {
  return (
    <Container>
      <img src={Box} alt="food" />

      <Content>
        <div>
          <p>Already been donated</p>

          <Count>157</Count>

          <p>Basic baskets</p>
        </div>

        <time>22/04/2020 às 12:00</time>
      </Content>
    </Container>
  );
};

export default DonationSection;
