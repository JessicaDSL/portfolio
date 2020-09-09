import React from "react";

import { list } from "./content";
import { Container, Content, List, ListItem } from "./styles";

const FooterSection = () => {
  return (
    <Container>
      <Content>
        <h5>CarStore</h5>
        <p>© 2017 . All Rights Reserved.</p>
      </Content>

      <List>
        {list.map((item, index) => (
          <ListItem key={index}>
            <p>{item.icon}</p>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default FooterSection;
