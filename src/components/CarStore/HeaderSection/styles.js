import styled from "styled-components";

import BackCar from "../../../assets/image/carstore/fundo-carro.png";

export const Container = styled.div`
  background-image: url(${BackCar});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  min-height: 872px;
  width: 100%;
  display: flex;
  flex-direction: column;
  hr {
    max-width: 1250px;
    height: 2px;
    color: #585858;
    background-color: #585858;
    margin: 0 auto;
    border: 0;
  }
`;

export const Content = styled.div`
  min-height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: #212121;
  div {
    flex-direction: row;
  }
  a {
    padding: 0 30px 0 0;
  }
  span {
    svg {
      color: #ffffff;
      width: 15px;
      height: 15px;
      border-left: 1px solid #595959;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  width: 320px;
  
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
`;

export const Hr = styled.hr``;
