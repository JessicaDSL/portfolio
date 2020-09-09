import React from "react";
import { FaSearch } from "react-icons/fa";

import { Container, List, ListItem } from "./styles";
import { links } from "./content";

const HeaderSearch = () => {
  return (
    <Container>
      <List>
        {links.map((item, index) => (
          <ListItem key={index}>
            <a href={item.url}>
              <span>{item.icon}</span>
              {item.label}
            </a>
          </ListItem>
        ))}
      </List>

      <div></div>

      <FaSearch />
    </Container>
  );
};

export default HeaderSearch;
