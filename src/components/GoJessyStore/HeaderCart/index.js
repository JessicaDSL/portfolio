import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';

import logo from '../../../assets/image/cart/logo.png';

function HeaderCart() {
  return (
    <Container>
      <Link to="/maincart">
        <img src={logo} alt="gojessylogo" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>My Cart</strong>
          <span>3 itens</span>
        </div>
        <MdShoppingBasket size={36} color="#fff"/>
      </Cart>
    </Container>
  );
}

export default HeaderCart;
