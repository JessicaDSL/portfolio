import React from "react";

import { Container, Content } from "./styles";

const FooterSection = () => {
  return (
    <Container>
      <Content>
        <h1>CarStore</h1>
        <p>© 2017 . All Rights Reserved.</p>
      </Content>

      <div>
        <i class="fab fa-cc-amex"></i>
        <i class="fab fa-cc-paypal"></i>
        <i class="fab fa-cc-visa"></i>
        <i class="fab fa-cc-mastercard"></i>
        <i class="fas fa-closed-captioning"></i>
        <i class="fab fa-cc-diners-club"></i>
      </div>
    </Container>
  );
};

export default FooterSection;
