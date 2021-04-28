import React from "react";

import { Container, List, ListItem } from "./styles";

const FooterSection = () => {
  return (
    <Container>
      <List>
        <ListItem>
          <a href="https://jessicadsl.github.io/portfolio/">Contact</a>
        </ListItem>
        <ListItem>
          <a href="https://jessicadsl.github.io/portfolio/">Download</a>
        </ListItem>
        <ListItem>
          <a href="https://jessicadsl.github.io/portfolio/">Press</a>
        </ListItem>
        <ListItem>
          <a href="https://jessicadsl.github.io/portfolio/">Email</a>
        </ListItem>
        <ListItem>
          <a href="https://jessicadsl.github.io/portfolio/">Support</a>
        </ListItem>
        <ListItem>
          <a href="https://jessicadsl.github.io/portfolio/">Privacy Policy</a>
        </ListItem>
      </List>
    </Container>
  );
};

export default FooterSection;
