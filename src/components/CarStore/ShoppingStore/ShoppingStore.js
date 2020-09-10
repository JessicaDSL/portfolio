import React from "react";

import { list } from "./content";
import { Container, List, ListItem } from "./styles";

const ShoppingStore = () => {
  return (
    <Container>
      <List>
        {list.map((item, index) => (
          <ListItem key={index}>
            <a href={item.url}>
              <b>{item.icon}</b>
              <p>{item.label}</p>
            </a>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default ShoppingStore;
