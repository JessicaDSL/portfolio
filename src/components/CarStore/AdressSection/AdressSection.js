import React from 'react';

import { Container, Content, List, ListItem } from "./styles";

function AdressSection() {
  return(
    <Container>
      <Content>
        <section>
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
        </section>
        <section>
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
        </section>
        <section>
          <h1>CONTACT</h1>
          <hr />
          <List>
            <ListItem>
              <i class="fas fa-map-marker-alt"></i>
              123, Main Road, Your City, NY 1234
            </ListItem>
            <ListItem>
              <i class="fas fa-phone-alt"></i>
              +123 456 7890
            </ListItem>
            <ListItem>
              <i class="far fa-clock"></i>7 Days a week from 10:00 am to 6:00 pm
            </ListItem>
            <ListItem>
              <i class="fas fa-envelope"></i>
              info@psdfreebies.com
            </ListItem>
          </List>
        </section>
      </Content>
    </Container>
  );
}

export default AdressSection;