import React from "react";

import { links } from "./content";
import { List, ListItem, Nav } from "./styles";

function HeaderNav() {
  return (
    <Nav>
      <List>
        {links.map((item, index) => (
          <ListItem key={index}>
            <a href={item.url}>{item.label}</a>
          </ListItem>
        ))}
      </List>
    </Nav>
  );
}

export default HeaderNav;
