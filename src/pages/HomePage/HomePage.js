import React from "react";

import { Container, Content, Section } from "./styles";
//import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Circles from '../../assets/image/circles.png';

const HomePage = () => {
  return (
    <Container>
      <Hero />
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
      <Section>
        <img src={Circles} alt=""/>
        <h2>Jéssica Lima</h2>
      </Section>
    </Container>
  );
};

export default HomePage;
