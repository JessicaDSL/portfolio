import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import HeaderCart from '../../../components/GoJessyStore/HeaderCart';
import { Container, ProductTable, Total, Content } from './styles';

export default function Cart() {
  return (
    <Container>
      <HeaderCart />
      <Content>
        <ProductTable>
          <thead>
            <tr>
              <th />
              <th>PRODUCT</th>
              <th>AMOUNT</th>
              <th>SUBTOTAL</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src="https://www.justlia.com.br/wp-content/uploads/2012/03/liberdade004.jpg"
                  alt="Itemfofo"
                />
              </td>
              <td>
                <strong>Item muito fofo</strong>
                <span>R$129,90</span>
              </td>
              <td>
                <div>
                  <button type="button">
                    <MdRemoveCircleOutline size={20} color="#d52863" />
                  </button>
                  <input type="number" readOnly value={2} />
                  <button type="button">
                    <MdAddCircleOutline size={20} color="#d52863" />
                  </button>
                </div>
              </td>
              <td>
                <strong>R$258,80</strong>
              </td>
              <td>
                <button type="button">
                  <MdDelete size={20} color="#d52863" />
                </button>
              </td>
            </tr>
          </tbody>
        </ProductTable>

        <footer>
          <button type="button">Finalizar Pedido</button>
          <Total>
            <span>TOTAL</span>
            <strong>R$1920,28</strong>
          </Total>
        </footer>
      </Content>
    </Container>
  );
}
