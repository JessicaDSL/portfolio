import styled from "styled-components";
import media from 'styled-media-query';
import Offer from "../../../assets/image/carstore/carros-fundo.png";

export const Container = styled.div`
  min-height: 520px;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  color: #ffffff;
  text-align: center;
  background-image: url(${Offer});
  font-family: Lato;
  
  hr {
    opacity: 0.5;
  }
  
  p {
    padding: 10px 0 20px 0;
  }

  h1 {
    font-size: 82px;
  }

  h2 {
    font-size: 40px;
    font-family: Lato;
    font-stretch: expanded;
    text-transform: uppercase;
  }

  input {
    background-color: #9c1c28;
    color: #ffffff;
    padding: 10px 40px;
    cursor: pointer;
    border-radius: 20px;
    border: 0px solid;
    font-size: 20px;
    font-family: Lato;
    text-transform: uppercase;
  }
  ${media.lessThan("970px")`
    flex-direction: column;
    min-height: 900px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    hr{
      display: none;
    }
  `}
`;

export const Content = styled.div`
  width: 1200px;
  justify-content: space-around;
  ${media.lessThan("640px")`
    margin: 50px 0;
    
  `}
  ${media.lessThan("970px")`
    width: 100%;
    
  `}
  
`;
