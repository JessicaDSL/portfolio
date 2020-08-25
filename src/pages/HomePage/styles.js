import styled from 'styled-components';
import media from 'styled-media-query';

import Desktop from '../../assets/image/back-home-1.png'


export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${Desktop});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  
  ${media.lessThan("900px")`
    background-image: none;
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 150px 0;
  color: #f5f5f5;
  ${media.lessThan("1024px")`
    display: none;
  `}

  h1 {
    color: #de3163;
    font-family: Lato;
    letter-spacing: 4px;
    font-size: 135px;
    position: relative;
    top: -50px;
  }

  p {
    font-family: Lato;
    font-weight: 400;
    font-size: 14px;
    position: relative;
    top: -60px;
  }

  h3 {
    font-family: Lato;
    font-weight: 200;
    font-size: 50px;
  }

  small {
    font-family: Lato;
    font-weight: 200;
    font-size: 20px;
  }

  ${media.lessThan("1024px")`
    h1, p, h3, small{
      display: none;
    }
  `}
`;

export const Section = styled.div`
  display: none;

  ${media.lessThan("1024px")`
    display: flex;
    align-items: center;
    background: #e76b8f;
    height: 100vh;
    flex-direction: column;
    font-family: Gadugi;
    color: #f1f1f1;
    font-size: 30px;
    
    img{ 
      width: 400px;
      height:400px;
      margin: 110px 0 20px 0;
    }
  `}
`;