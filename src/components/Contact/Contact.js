import React from "react";

import { list } from "./content";
import {
  Container,
  Content,
  LineA,
  LineB,
  List,
  Section,
  Aside,
  Links,
  SocialMedia
} from "./styles";

import Map from "../../assets/image/contact/portugal.png";
import Photo from "../../assets/image/contact/photo.png";

import FooterSection from "../FooterSection";

const Contact = () => {
  return (
    <Container id="contact">
      <Content>
        <LineA></LineA>
        <LineB></LineB>
      </Content>
      <Section>
        <Links>
          <h1>Contacts</h1>
          <div>
            <img src={Photo} alt="" />
            <SocialMedia>
              <p>
                Here you can find me <br />
                on social networks and <br />
                get to know me a little better.
              </p>
              <p>
                <br />
                <span>jessikurt@gmail.com</span>
                <br />
                <br />
              </p>
              <List>
                {list.map((item, index) => (
                  <li key={index}>
                    <a href={item.url} target="blank">
                      {item.icon}
                    </a>
                  </li>
                ))}
              </List>
            </SocialMedia>
          </div>
        </Links>

        <Aside>
          <p>
            I live in <span>Portugal</span>
          </p>
          <img src={Map} alt="" />
        </Aside>
        
      </Section>
      <FooterSection />
    </Container>
  );
};

export default Contact;
