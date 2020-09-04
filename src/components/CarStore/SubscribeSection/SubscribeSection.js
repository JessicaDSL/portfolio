import React from "react";

import {
  Container,
  Content,
  List,
  ListItem,
  Form,
  Input
} from "./styles";

import { links } from "./content";
import QuickLinks from '../QuickLinks';

const SubscribeSection = () => {
  return (
    <Container>
      <QuickLinks />
      <QuickLinks />
      <QuickLinks />

      <Content>
        <h1>Newsletter</h1>
        <hr />
        <Form>
          <label>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </label>
          <Input type="email" placeholder="" id="news" required />
          <button>submit</button>
          <List>
          {links.map((item, index) => (
            <ListItem key={index}>
              <a href={item.url}>{item.icon}</a>
            </ListItem>
          ))}
          </List>
        </Form>
      </Content>
    </Container>
  );
};

export default SubscribeSection;
