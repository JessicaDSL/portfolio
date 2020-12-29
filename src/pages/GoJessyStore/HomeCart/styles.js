import styled from 'styled-components';
import { darken } from 'polished'

export const ProductList = styled.div`
  max-width: 1020px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    max-width: 1020px;
  }
  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;

    img {
    align-self: center;
    max-width: 250px;
    border-radius: 2px;
  }
  
  >strong {
    font-size: 16px;
    line-height: 20px;
    color: #333;
    margin-top: 5px;
  }

  >span {
    font-size: 21px;
    font-weight: bold;
    margin: 5px 0 20px;
  }

  button {
    background: #d52863;
    color: #fff;
    border: 0;
    border-radius: 4px;
    overflow: hidden;
    margin-top: auto;
    display: flex;
    align-items: center;

    &:hover {
      background: ${darken(0.03, '#d52863')}
    }

    div {
      display: flex;
      align-items: center;
      padding: 12px;
      background: rgba(0, 0, 0, 0.1);

      svg {
        margin-right: 5px;
      }
    }

    span {
      flex: 1;
      text-align: center;
      font-weight: bold;
      letter-spacing: 1.2px;
    }
  }
  }
`;
