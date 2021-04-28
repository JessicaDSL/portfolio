import React from "react";

import { Container, LineA, LineB, Content } from "./styles";
import { FaArrowCircleUp } from "react-icons/fa";

const FooterSection = () => {
  return (
    <Container>
      <a href="#header">
        <FaArrowCircleUp />
      </a>
      <Content>
        <LineA></LineA>
        <LineB></LineB>
      </Content>
    </Container>
  );
};

export default FooterSection;
