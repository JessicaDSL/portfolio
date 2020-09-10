import styled from "styled-components";
import media from 'styled-media-query';

import Hands from "../../../assets/image/auti/hands.png";

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  background-image: url(${Hands});
  height: 605px;
  background-repeat: no-repeat;
  background-origin: padding-box;
  background-size: 50%;
  background-position-x: 100%;
  background-position-y: 100%;
  font-family: Lato;

  div {
    width: 83%;
  }

  h1 {
    color: rgb(128, 128, 128);
    font-size: 39px;
    font-weight: medium;
    padding: 60px 0 20px 0;
  }

  p {
    font-size: 1rem;
    color: rgb(87, 85, 85);
    max-width: 450px;
    margin: 20px 0;
  }

  span {
    color: rgb(218, 16, 128);
    font-weight: bold;
  }
  
  button {
    background-color: rgb(218, 16, 128);
    color: #ffffff;
    border-bottom-color: rgb(255, 255, 255);
    border: 0;
    padding: 16px 56px;
    border-radius: 5px;
    font-size: 16px;
    margin: 40px 0 0 0;
  }

  ${media.lessThan('medium')`
  background-size: contain;
  
  `}

`;
