import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { Container } from "./styles";

const Footer = () => {
  return (
    <Container>
      Feito com <FavoriteBorderIcon /> por <a href="https://www.github.com/jessicaDSL" target="_blank" rel="noreferrer">Jéssica Lima</a>
    </Container>
  );
};

export default Footer;
