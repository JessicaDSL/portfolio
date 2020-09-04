import React from 'react';

import { list } from './content';
import { Container, List, ListItem } from './styles';

const QuickLinks = () => {
  return(
    <Container>
        <h1>Quick Links</h1>
        <hr />
        <List>
          {list.map((item, index) => (
            <ListItem key={index}>
              <a href={item.url}><p>{item.text}</p></a>
            </ListItem>
          ))}
        </List>
      </Container>
  );
}

export default QuickLinks;