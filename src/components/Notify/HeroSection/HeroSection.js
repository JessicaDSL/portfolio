import React from "react";
import { GrApple, GrWindows, GrAndroid } from "react-icons/gr";

import { Container, Content, Nav, Ul } from "./styles";
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
          <Ul>
            <li>
              <a href="#">
                <GrApple />
              </a>
            </li>
            <li>
              <a href="#">
                <GrWindows />
              </a>
            </li>
            <li>
              <a href="#">
                <GrAndroid />
              </a>
            </li>
          </Ul>
        </Nav>
      </Content>
      <img src={Phone} alt="" />
    </Container>
  );
}

export default HeroSection;
