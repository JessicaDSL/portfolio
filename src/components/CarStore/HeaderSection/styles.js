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

  div {
    background-color: #212121;
    justify-items: center;
  }
`;

export const Content = styled.div`
  height: 100px;
  display: flex;
  background-color: #212121;
  justify-content: center;
  align-items: center;

  a {
    padding: 0 30px 0 0;
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

export const Line = styled.hr`
  width: 100%;
  height: 2px;
  background: #595959;
  justify-items: center;
  border: 0;
  margin: 0 auto;
`;
