import React from "react";

import Mapa from "../../assets/image/map.png";
import Photo from "../../assets/image/foto-contact-dois.png";
import { list } from "./content";
import { Container, List, ListItem, Content, Main, Aside } from "./styles";

const Contact = () => {
  return (
    <Container>
      <Content>
        <Main>
          <img src={Photo} alt="" />
          <List>
            {list.map((item, index) => (
              <ListItem key={index}>
                <a href={item.url}>{item.icon}</a>
              </ListItem>
            ))}
          </List>
        </Main>
        <Aside>
          <h3>
            I live in
          </h3>
          <img src={Mapa} alt="" />
        </Aside>
      </Content>
    </Container>
  );
};

export default Contact;
