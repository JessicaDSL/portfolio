import React from "react";

import { Container, Content} from "./styles";
import Hero from "../../components/Hero";

const HomePage = () => {
  return (
    <Container>
      <Content>
      <div>
        <h3>HELLO WORLD,</h3>
        <small> I'm</small>
        <h1>Jéssica Lima</h1>
        <p>
          I’m a web developer, and I was born in Brazil, Rio de Janeiro,
          currently live in Portugal.
        </p>
        <p>
          I am passionate about technology and making dreams come true through
          the logic of programming.
        </p>
      </div>
      </Content>
    </Container>
  );
};

export default HomePage;
