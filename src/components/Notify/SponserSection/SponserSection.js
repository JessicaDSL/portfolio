import React from "react";

import { Container, Content, SponserList, List, ListItem } from "./styles";
import {
  GrPinterest,
  GrFacebook,
  GrTwitter,
  GrGoogle,
  GrLinkedin,
  GrYoutube,
} from "react-icons/gr";

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

      <h3>Jane Hunt</h3>

      <List>
        <ListItem>
          <SponserList>
            {list.map((item, index) => (
              <img src={item.image} alt="icone" key={index} image={item.image} />
            ))}
          </SponserList>
        </ListItem>
      </List>

      <h2>Say Hi & Get in Touch</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit suspendisse.
      </p>

      <Content>
        <GrPinterest />
        <GrFacebook />
        <GrTwitter />
        <GrGoogle />
        <GrLinkedin />
        <GrYoutube />
      </Content>
    </Container>
  );
};

export default SponserSection;
