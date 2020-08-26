import React from "react";

import { Container, List, ListItem, Content } from "./styles";
import { GrApple, GrWindows, GrAndroid } from "react-icons/gr";
import Phone from "../../../assets/image/notify/mao-iphone.png";

function HeroSection() {
  return (
    <Container>
      <Content>
        <h1>
          Notify<span>.</span>
        </h1>
        <p>A great new free psd theme to showcase your new application.</p>
        <List>
          <ListItem>
            <GrApple />
          </ListItem>
          <ListItem>
            <GrWindows />
          </ListItem>
          <ListItem>
            <GrAndroid />
          </ListItem>
        </List>
      </Content>
      <img src={Phone} alt="" />
    </Container>
  );
}

export default HeroSection;
