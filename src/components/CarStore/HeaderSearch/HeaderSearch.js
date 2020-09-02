import React from "react";

import { Container, List, ListItem } from "./styles";
import { links } from "./content";

const HeaderSearch = () => {
  return (
    <Container>
      <List>
        {links.map((item, index) => (
          <ListItem key={index}>
            {item.icon}
            <a href={item.url}>{item.label}</a>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default HeaderSearch;
