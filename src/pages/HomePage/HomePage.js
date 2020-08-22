import React from "react";

import { Container, Content } from "./styles";
import Header from "../../components/Header";

const HomePage = () => {
  return (
    <Container>
      <Header />
      <Content>
        <h3>Hello World!</h3>
        <small>I'm</small>
        <h1>Jéssica Lima.</h1>
        <p>
          I’m a web developer, and I was born in Brazil, Rio de janeiro,
          currently live in Portugal.
        </p>
        <p>
          I am passionate about technology, and making dreams come true through
          the logic of programming.
        </p>
      </Content>
    </Container>
  );
};

export default HomePage;
