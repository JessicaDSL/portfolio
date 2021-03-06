import styled from "styled-components";
import media from "styled-media-query";

import Fundo from "../../../assets/image/notify/fundo-total.png";

export const Container = styled.div`
  height: 600px;
  background-image: url(${Fundo});
  background-size: 100% 100%;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  img {
    position: relative;
    left: 80px;
  }

  ${media.lessThan("960px")`
  max-height: 400px;
  

  img {
    display: none;
  }
  `}
`;

export const Content = styled.div`
  align-self: center;
  margin: 0 40px;
  h1 {
    font-size: 60px;
    font-family: Pacifico;
    color: #ffffff;
    margin: 0 0 30px 0;
  }

  span {
    color: #2ecc71;
  }

  p {
    font-size: 20px;
    font-family: "Roboto", sans-serif;
    color: white;
    max-width: 400px;
    font-weight: bold;
    margin: 15px 0;
  }
`;

export const Nav = styled.nav`

  svg {
    font-size: 25px;
    color: white;
    margin: 15px;
  }
`;

export const List = styled.ul`
  display: flex;
  padding: 0;

  li {
    margin: 0 15px 0 0;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    transition: 0.5s all;
    
    &:hover {
      background-color: #2ecc71;
      border-radius: 50%;
      background-size: 5px;
    }
  }
`;


export const ListItem = styled.li``