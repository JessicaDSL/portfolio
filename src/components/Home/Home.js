import React from "react";

import { Container, Content } from "./styles";
import Background from "../../assets/image/home/bg01.png";

const Home = () => {
  return (
    <Container id="home">
      <Content>
        <div>
          <h1>JÉSSICA LIMA</h1>
          <h3>Frontend Developer</h3>
          <p>
            Hello World, I'm a web developer, and i was born in Brazil, Rio de
            Janeiro. Currently live in Portugal. I am passionate about
            technology, games, creativity, and making dreams come true through
            the logic of programing.
          </p>
          <p>
            I am currently focused on website development and maintenance. Using
            HTML5, CSS3, Flexbox, Grid, Javascript, ReactJS and StyledComponents
            technologies
          </p>
          <p>:)</p>
        </div>
        <div>
          <img src={Background} alt="" />
        </div>
      </Content>
    </Container>
  );
};

export default Home;
