import React from "react";

import { list } from "./content";
import { Container, List, ListItem } from "./styles";

const AskSection = () => {
  return (
    <Container>
      <h2>
        <span>COMMON</span>
      </h2>
      <h2>QUESTIONS</h2>
      <hr />
      <List>
        {list.map((item, index) => (
          <ListItem key={index}>
            <p>{item.text}</p>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default AskSection;
