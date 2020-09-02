import React from 'react';

import { list } from './content';
import { Container, Content, List, ListItem } from "./styles";

function AdressSection() {
  return(
    <Container>
        <Content>
          <h1>INFORMATION</h1>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Content>
        <Content>
          <h1>INFORMATION</h1>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Content>
        <Content>
          <h1>CONTACT</h1>
          <hr />
          <List>
            {list.map((item, index) => (
              <ListItem key={index}>
                <b>{item.icon}</b>
                <p>{item.info}</p>
              </ListItem>
            ))}
          </List>
        </Content>
    </Container>
  );
}

export default AdressSection;