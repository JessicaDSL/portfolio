import React from 'react';

import { Link } from "react-router-dom";
import { FaArrowCircleLeft } from 'react-icons/fa'

import { Container } from './styles';

function ArrowLeft() {
  return(
    <Container>
      <Link to={"/"}>
      <h1><span><FaArrowCircleLeft /></span>Voltar ao site</h1>
      </Link>
    </Container>
  );
}

export default ArrowLeft;