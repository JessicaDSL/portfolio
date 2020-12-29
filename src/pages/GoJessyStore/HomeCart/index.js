import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

function HomeCart() {
  return (
    <ProductList>
      <ul>
        <li>
          <img
            src="https://www.justlia.com.br/wp-content/uploads/2012/03/liberdade004.jpg"
            alt="produto01"
          />
          <strong>Pote fofo</strong>
          <span>R$35,00</span>
          <button type="button">
            <div>
              <MdAddShoppingCart size={16} color="#fff" /> 3
            </div>
            <span>ADD TO CART</span>
          </button>
        </li>
        <li>
          <img
            src="https://www.justlia.com.br/wp-content/uploads/2012/03/liberdade004.jpg"
            alt="produto01"
          />
          <strong>Pote fofo</strong>
          <span>R$35,00</span>
          <button type="button">
            <div>
              <MdAddShoppingCart size={16} color="#fff" /> 3
            </div>
            <span>ADD TO CART</span>
          </button>
        </li>
        <li>
          <img
            src="https://www.justlia.com.br/wp-content/uploads/2012/03/liberdade004.jpg"
            alt="produto01"
          />
          <strong>Pote fofo</strong>
          <span>R$35,00</span>
          <button type="button">
            <div>
              <MdAddShoppingCart size={16} color="#fff" /> 3
            </div>
            <span>ADD TO CART</span>
          </button>
        </li>
        <li>
          <img
            src="https://www.justlia.com.br/wp-content/uploads/2012/03/liberdade004.jpg"
            alt="produto01"
          />
          <strong>Pote fofo</strong>
          <span>R$35,00</span>
          <button type="button">
            <div>
              <MdAddShoppingCart size={16} color="#fff" /> 3
            </div>
            <span>ADD TO CART</span>
          </button>
        </li>
        <li>
          <img
            src="https://www.justlia.com.br/wp-content/uploads/2012/03/liberdade004.jpg"
            alt="produto01"
          />
          <strong>Pote fofo</strong>
          <span>R$35,00</span>
          <button type="button">
            <div>
              <MdAddShoppingCart size={16} color="#fff" /> 3
            </div>
            <span>ADD TO CART</span>
          </button>
        </li>
        <li>
          <img
            src="https://www.justlia.com.br/wp-content/uploads/2012/03/liberdade004.jpg"
            alt="produto01"
          />
          <strong>Pote fofo</strong>
          <span>R$35,00</span>
          <button type="button">
            <div>
              <MdAddShoppingCart size={16} color="#fff" /> 3
            </div>
            <span>ADD TO CART</span>
          </button>
        </li>
      </ul>
    </ProductList>
  );
}

export default HomeCart;
