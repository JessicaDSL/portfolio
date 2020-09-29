import React from "react";

import { list } from "./content";
import { Container, List, LineA, LineB, Nav } from "./styles";

const Header = () => {
  return (
    <Container id="header">
      <LineA></LineA>
      <Nav>
        <List>
          {list.map((item, index) => (
            <li key={index}>
              <a href={item.url}>{item.label}</a>
            </li>
          ))}
        </List>
      </Nav>
      <LineB></LineB>
    </Container>
  );
};

export default Header;
