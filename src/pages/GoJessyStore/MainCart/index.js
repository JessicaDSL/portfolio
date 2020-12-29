import React from 'react';

import { Container } from './styles';
import HeaderCart from '../../../components/GoJessyStore/HeaderCart'
import HomeCart from '../../../pages/GoJessyStore/HomeCart'

function MainCart() {
  return (
    <Container>
    <HeaderCart />
    <HomeCart />
    </Container>
  );
}

export default MainCart;