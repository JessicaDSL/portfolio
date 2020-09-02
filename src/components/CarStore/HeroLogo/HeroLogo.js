import React from 'react';

import { Container, Content, List, ListItem   } from './styles';

const HeroLogo = () => {
  return(
    <Container>
      <Content>
      <h1>
        Car<span>Store</span>
      </h1>
      <h4>Best Car Seller</h4>
      </Content>
      <Content>
      <List>
        <ListItem>
        <i class="fas fa-mobile-alt"></i>
        +123 456 7890
        </ListItem>
        <ListItem>
          <p>Mon-Fri: 8:30am-7:30pm; Sat-Sun: 9:30am-4:30pm</p>
        </ListItem>
      </List>
      </Content>
    </Container>
  );
}

export default HeroLogo;