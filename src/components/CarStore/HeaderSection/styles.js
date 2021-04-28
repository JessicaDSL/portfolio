import styled from "styled-components";
import media from "styled-media-query";

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

  ${media.lessThan("500px")`
  min-height: 300px;
    background: none;
    
  `}
`;

export const Content = styled.div`
  min-height: 100px;
  display: flex;
  background-color: #212121;
  justify-content: center;
  align-items: center;
  width: 100%;
  a {
    padding: 0 30px 0 0;
  }

  ${media.lessThan("500px")`
    flex-direction: column;
    background: purple;
  `}
`;

export const List = styled.ul`
  display: flex;
  width: 320px;
  ${media.lessThan("500px")`
  `}
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
