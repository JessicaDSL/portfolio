import React from "react";

import { Container, Content } from "./styles";

const ArticleSection = () => {
  return (
    <Container>
      <Content>
        <h1>25% OFF</h1>
        <h2>on order over $999</h2>
        <p>This Offer is valid on all our items</p>
        <input type="submit" id="buy" value="Buy Now" />
      </Content>
      <hr size="170" width="3" align="left" color="#fff" />
      <Content>
        <h1>25% OFF</h1>
        <h2>on order over $999</h2>
        <p>This Offer is valid on all our items</p>
        <input type="submit" id="buy" value="Buy Now" />
      </Content>
    </Container>
  );
};

export default ArticleSection;
