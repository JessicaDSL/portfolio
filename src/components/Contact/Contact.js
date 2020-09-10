import React from "react";

import { list } from "./content";
import { Container, List, ListItem, Section, Main, Aside, Links } from "./styles";

import Mapa from "../../assets/image/map.png";
import Photo from "../../assets/image/foto-contact-dois.png";

const Contact = () => {
  return (
    <Container>
      <Main>
        <div>
        <h1>CONTACT</h1>
        <hr />
        </div>

        <Section>
          <Links>
            <img src={Photo} alt="" />

            <List>
              {list.map((item, index) => (
                <ListItem key={index}>
                  <a href={item.url}>{item.icon}</a>
                </ListItem>
              ))}
            </List>
          </Links>

          <Aside>
            <img src={Mapa} alt="" />
          </Aside>
        </Section>
      </Main>
    </Container>
  );
};

export default Contact;
