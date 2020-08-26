import React from "react";

import { Figure, Container, ListItem, List } from './styles'; 

const Sponser = ({ image }) => {
  return (
    <Container>
      <List>
        <ListItem>
          <a href="https://www.google.com.br">
            <Figure>
              <img src={image} alt="icone" />
            </Figure>
          </a>
        </ListItem>
      </List>
    </Container>
  );
}

export default Sponser;
