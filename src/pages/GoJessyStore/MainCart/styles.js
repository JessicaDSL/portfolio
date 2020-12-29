import styled from 'styled-components';
import background from '../../../assets/image/cart/backgroundum.svg'

export const Container = styled.div`
  background: #191920 url(${background}) no-repeat center top;
  padding: 20px 0 50px;
  height: 100vh;
  input, button {
    font: 14px Roboto, sans-serif;
  }
  button {
    cursor: pointer;
  }
`;
