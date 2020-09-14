import React from "react";
import {
  GrPinterest,
  GrFacebook,
  GrTwitter,
  GrGoogle,
  GrLinkedin,
  GrYoutube,
} from "react-icons/gr";

import { Container, Content, List, ListItem } from "./styles";
import { list } from "./content";



const SponserSection = () => {
  return (
    <Container>
      <p>
        <span>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          interdum velit vitae nulla molestie eu commodo nulla dapib us. Donec
          id sollicitudin urna. Integer at dui ac leo fermentum varius eleifend
          ut.”
        </span>
      </p>

      <small>Jane Hunt</small>

      <Content>
        {list.map((item, index) => (
          <img src={item.image} alt="icone" key={index} />
        ))}
      </Content>

      <b>Say Hi & Get in Touch</b>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit suspendisse.
      </p>

      <List>
        <ListItem>
          <a href="https://jessicadsl.github.io/portfolio/">
            <GrPinterest />
          </a>
        </ListItem>
        <ListItem>
          <a href="https://jessicadsl.github.io/portfolio/">
            <GrFacebook />
          </a>
        </ListItem>
        <ListItem>
          <a href="https://jessicadsl.github.io/portfolio/">
            <GrTwitter />
          </a>
        </ListItem>
        <ListItem>
          <a href="https://jessicadsl.github.io/portfolio/">
            <GrGoogle />
          </a>
        </ListItem>
        <ListItem>
          <a href="https://jessicadsl.github.io/portfolio/">
            <GrLinkedin />
          </a>
        </ListItem>
        <ListItem>
          <a href="https://jessicadsl.github.io/portfolio/">
            <GrYoutube />
          </a>
        </ListItem>
      </List>
    </Container>
  );
};

export default SponserSection;
