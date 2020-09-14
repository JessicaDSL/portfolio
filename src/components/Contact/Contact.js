import React from "react";

import { list } from "./content";
import {
  Container,
  Content,
  LineA,
  LineB,
  List,
  ListItem,
  Section,
  Aside,
  Links,
} from "./styles";

import Map from "../../assets/image/contact/portugal.png";
import Photo from "../../assets/image/contact/photo.png";

const Contact = () => {
  return (
    <Container id="contact">
      <Content>
        <LineA></LineA>
        <LineB></LineB>
      </Content>
      <Section>
        <div>
          <h1>Contacts</h1>
          <Links>
            <img src={Photo} alt="" />
            <div>
              <p>
                Here you can find me <br />
                on social networks and <br />
                get to know me a little better.
              </p>
              <p>
                <br />
                jessikurt@gmail.com
                <br />
                <br />
              </p>

              <List>
                {list.map((item, index) => (
                  <ListItem key={index}>
                    <a href={item.url} target="blank">
                      {item.icon}
                    </a>
                  </ListItem>
                ))}
              </List>
            </div>
          </Links>
        </div>
        <Aside>
          <p>I live in</p>
          <img src={Map} alt="" />
          <h3>Portugal</h3>
        </Aside>
      </Section>
    </Container>
  );
};

export default Contact;
