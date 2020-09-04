import React from "react";

import { list } from "./content";
import { Container, Content, List, ListItem } from "./styles";

const FeatureSection = () => {
  return (
    <Container>
      <div>
        <h1>Featured Products</h1>
        <hr />
      </div>
      <div></div>
      <Content>
        <List>
          {list.map((item, index) => (
            <ListItem key={index}>
              
              <img src={item.image} alt="car" />
              <p>{item.title}</p>
              <b>{item.price}</b>
              <b>{item.icon}</b>
            </ListItem>
          ))}
        </List>
      </Content>
    </Container>
  );
};

export default FeatureSection;
