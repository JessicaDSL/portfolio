import React from 'react';

import { Container, List, ListItem } from './styles';
import { list } from './content';

const QuickLinks = () => {
  return(
    <Container>
        <h1>Quick Links</h1>
        <hr />
        <List>
          {list.map((item, index) => (
            <ListItem key={index}>
              <a href={item.url}>{item.text}</a>
            </ListItem>
          ))}
        </List>
      </Container>
  );
}

export default QuickLinks;