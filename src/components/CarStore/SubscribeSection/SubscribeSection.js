import React from 'react';

import { Container, Content, List, ListItem, Article, Form, Label, PlaceHolder, Button } from './styles';

const SubscribeSection = () => {
  return(
    <Container>

      <Content>
      <h1>Quick Links</h1>
      <hr />
      <List>
        <ListItem>About Us</ListItem>
        <ListItem>Customer Service</ListItem>
        <ListItem>Privacy Policy</ListItem>
        <ListItem>Site Map</ListItem>
        <ListItem>Search Terms</ListItem>
        <ListItem>Advanced Search</ListItem>
        <ListItem>Orders and Returns</ListItem>
        <ListItem>Contact Us</ListItem>
      </List>
      </Content>

      <Content>
      <h1>Quick Links</h1>
      <hr />
      <List>
        <ListItem>About Us</ListItem>
        <ListItem>Customer Service</ListItem>
        <ListItem>Privacy Policy</ListItem>
        <ListItem>Site Map</ListItem>
        <ListItem>Search Terms</ListItem>
        <ListItem>Advanced Search</ListItem>
        <ListItem>Orders and Returns</ListItem>
        <ListItem>Contact Us</ListItem>
      </List>
      </Content>

      <Content>
      <h1>Quick Links</h1>
      <hr />
      <List>
        <ListItem>About Us</ListItem>
        <ListItem>Customer Service</ListItem>
        <ListItem>Privacy Policy</ListItem>
        <ListItem>Site Map</ListItem>
        <ListItem>Search Terms</ListItem>
        <ListItem>Advanced Search</ListItem>
        <ListItem>Orders and Returns</ListItem>
        <ListItem>Contact Us</ListItem>
      </List>
      </Content>

      <Article>
      <h1>Newsletter</h1>
          <hr />
          <Form>
            <Label>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </Label>
            <PlaceHolder type="email" placeholder="" id="news" required />
            <Button>submit</Button>
            <div>
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-google-plus-g"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-pinterest-p"></i>
            </div>
          </Form>
      </Article>

    </Container>
  );
}

export default SubscribeSection;