import React from "react";

import { Container, List, ListItem } from "./styles";
import { list } from "./content";

const FeatureSection = () => {
  return (
    <Container>
      <List>
        {list.map((item, index) => (
          <ListItem key={index}>
            <img src={item.image} alt="icone" />
            <b>{item.title}</b>
            <p>{item.descripition}</p>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default FeatureSection;
