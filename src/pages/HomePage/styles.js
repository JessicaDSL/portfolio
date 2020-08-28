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

  ${media.lessThan("900px")`
  background-size: cover;
  background-repeat: no-repeat;
  `}
`;

export const Content = styled.div`
  display: flex;
  height: 400px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 100px 0 0 0;
  color: #f5f5f5;
  ${media.lessThan("1024px")`
    
  `}

  h1 {
    color: #de3163;
    font-family: Lato;
    letter-spacing: 3px;
    font-size: 120px;
    position: relative;
    top: -35px;
  }

  p {
    font-family: Lato;
    font-weight: 400;
    font-size: 14px;
    position: relative;
    top: -40px;
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

  ${media.lessThan("768px")`
    h1, p, h3, small{
      white-space: nowrap;
    } 
    h1 {
      font-size: 70px;
      margin: -20px 0 0 0;
      letter-spacing: 0px;
    }
    p {
      font-size: 10px;
    }
    h3 {
      font-size: 26px;
      padding: 40px 0 20px 0; 
    }
    small {
      font-size: 15px;
      margin: -15px 0 0 0; 
    }
  `}

  ${media.lessThan("1024px")`
  margin: 0;
  padding: 130px;
  display: flex;

    h1, p, h3, small{
      display: flex;
      position: static;
      justify-content: center;
      white-space: nowrap;
    }
  `}
`;