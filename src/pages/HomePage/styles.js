import styled from "styled-components";
import media from "styled-media-query";

import Desktop from "../../assets/image/back-home-1.png";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${Desktop});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;

  ${media.lessThan("461px")`
    background-size: cover;
  `}

  ${media.between("461px", "900px")`
  
   
  `}
`;

export const Content = styled.div`
  display: flex;
  height: 400px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #f5f5f5;

  h1 {
    color: #de3163;
    font-family: Lato;
    letter-spacing: 3px;
    font-size: 120px;
  }

  p {
    font-family: Lato;
    font-weight: 400;
    font-size: 14px;
  }

  h3 {
    font-family: Lato;
    font-weight: 200;
    font-size: 40px;
  }

  small {
    font-family: Lato;
    font-weight: 200;
    font-size: 20px;
  }

  ${media.lessThan("321px")`
      h1 {
        font-size: 52px;
        letter-spacing: 0;
        position: relative;
        top: -15px;
      }
      small {
        font-size: 16px;
      }
      h3 {
        font-size: 20px;
        margin: -40px 0 0 0;
      }
      p {
        font-size: 8px;
        max-width: 310px;
        position: relative;
        top: -15px;
      }
    `}
    ${media.between("321px", "426px")`
    h1 {
        font-size: 66px;
        letter-spacing: 0;
        position: relative;
        top: -15px;
      }
      small {
        font-size: 16px;
      }
      h3 {
        font-size: 20px;
        margin: -40px 0 0 0;
      }
      p {
        font-size: 8px;
        max-width: 400px;
        position: relative;
        top: -15px;
      }
    `}
    ${media.between("462px", "1024px")`
    margin: 20px 0 0 0;
    h1, p {
        position: relative;
        top: -30px;
      }
    `}
    ${media.between("1025px", "2100px")`
    height: 800px;
    h1 {
        font-size: 160px;
        letter-spacing: 0;
        position: relative;
        top: -60px;
      }
      small {
        font-size: 30px;
      }
      h3 {
        font-size: 70px;
        margin: -40px 0 0 0;
      }
      p {
        font-size: 20px;
        position: relative;
        top: -65px;
      }
    `}
    ${media.greaterThan("2101px")`
      height: 1200px;
    h1 {
        font-size: 380px;
        letter-spacing: 0;
        position: relative;
        top: -80px;
      }
      small {
        font-size: 50px;
      }
      h3 {
        font-size: 100px;
        margin: -40px 0 0 0;
      }
      p {
        font-size: 40px;
        position: relative;
        top: -85px;
      }
    `}
  
`;
