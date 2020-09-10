import styled from "styled-components";
import media from "styled-media-query";

import Desktop from "../../assets/image/back-home-1.png";

export const Container = styled.div`
height: 100vh;
  background-image: url(${Desktop});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #FCFBE3;
  ${media.lessThan("large")`
    background-size: cover;
  `}
`;

export const Content = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  bottom: 10%;
  h1 {
    color: #de3163;
    font-family: Lato;
    letter-spacing: 0.2%;
    font-size: 7.5rem;
    position: relative;
    bottom: 5%;
    left: 2%;
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
    margin: 10px 0 0 0;
  }

  ${media.lessThan("600px")`
    position: relative;
    bottom: 15%;
    h1 {
      font-size: 3.5rem;
      position: relative;
      bottom: 10px;
    }
    h3 {
      font-size: 1.8rem;
    }
    p { 
      margin: 0 10px;
    }
  `}
  ${media.between("600px","790px")`
  position: relative;
    bottom: 10%;
  h1 {
      font-size: 6rem;
      bottom: 10px;
    }
    h3 {
      font-size: 2rem;
    }
    p { 
      margin: 0 10px;
      font-size: 1rem;
    }
  `}
  ${media.between("790px","1800px")`
  position: relative;
    bottom: 10%;
  h1 {
      font-size: 8rem;
      bottom: 10px;
    }
    h3 {
      font-size: 2rem;
    }
    p { 
      margin: 0 15px;
      font-size: 1.3rem;
    }
  `}
  ${media.greaterThan("1800px")`
  position: relative;
  top: 2%;
  h1 {
      font-size: 10rem;
      bottom: 10px;
    }
    h3 {
      font-size: 4rem;
    }
    p { 
      margin: 0 15px;
      font-size: 1.5rem;
    }
    small{
      font-size: 2rem;
    }
  `}
`;
