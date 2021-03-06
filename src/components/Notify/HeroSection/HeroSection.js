import React from "react";
import { GrApple, GrWindows, GrAndroid } from "react-icons/gr";

import { Container, Content, Nav, List, ListItem } from "./styles";
import Phone from "../../../assets/image/notify/mao-iphone.png";

function HeroSection() {
  return (
    <Container>
      <Content>
        <h1>
          Notify<span>.</span>
        </h1>
        <p>A great new free psd theme to showcase your new application.</p>
        <Nav>
          <List>
            <ListItem>
              <a href="https://jessicadsl.github.io/portfolio/">
                <GrApple />
              </a>
            </ListItem>
            <ListItem>
              <a href="https://jessicadsl.github.io/portfolio/">
                <GrWindows />
              </a>
            </ListItem>
            <ListItem>
              <a href="https://jessicadsl.github.io/portfolio/">
                <GrAndroid />
              </a>
            </ListItem>
          </List>
        </Nav>
      </Content>
      <img src={Phone} alt="" />
    </Container>
  );
}

export default HeroSection;
