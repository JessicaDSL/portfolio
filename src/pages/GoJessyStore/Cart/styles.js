import styled from 'styled-components';
import background from '../../../assets/image/cart/backgroundum.svg';
import { darken } from 'polished';

export const Container = styled.div`
  background: #191920 url(${background}) no-repeat center top;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: #d52863;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#d52863')};
      }
    }
  }
`;

export const ProductTable = styled.div`
  width: 100%;
  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
    

    img {
      height: 100px;
      border-radius: 4px;
    }

    strong {
      color: #333;
      display: block;
    }

    span {
      display: block;
      margin-top: 5px;
      font-size: 18px;
      font-weight: bold;
      
    }

    div {
      display: flex;
      align-items: center;

      input {
        border: 1px solid #ddd;
        border-radius: 4px;
        color: #666;
        padding: 6px;
        width: 50px;
      }
    }

    button {
      border: 0;
      background: none;
      border-radius: 4px;
      padding: 6px;
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;
  
  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;

export const Content = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;
  width: 1020px;
`;


export const HeaderCart = styled.header`

`;