import React from "react";

import { Container, List, ListItem } from "./styles";

const FooterSection = () => {
  return (
    <Container>
      <List>
        <ListItem>
          <a href="#">Contact</a>
        </ListItem>
        <ListItem>
          <a href="#">Download</a>
        </ListItem>
        <ListItem>
          <a href="#">Press</a>
        </ListItem>
        <ListItem>
          <a href="#">Email</a>
        </ListItem>
        <ListItem>
          <a href="#">Support</a>
        </ListItem>
        <ListItem>
          <a href="#">Privacy Policy</a>
        </ListItem>
      </List>
    </Container>
  );
};

export default FooterSection;
