import React from "react";

import { Link } from "react-router-dom";

import { Container } from "./styles";

const Header = () => {
  return (
    <Container>
      <Link to={`/`}>HOME</Link>

      <Link to={`/layout-page`}>LAYOUTS</Link>

      <Link to={`/contact-page`}>CONTACT</Link>
    </Container>
  );
};

export default Header;
