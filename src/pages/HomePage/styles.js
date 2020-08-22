import styled from 'styled-components';

import Desktop from '../../assets/image/back-home.png'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url(${Desktop});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  color: #fff;
`;

export const Content = styled.div`
  margin: 130px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    color: #c1185c;
    font-family: Work Sans;
    font-weight: 900;
    font-size: 100px;
    position: relative;
    top: -20px;
  }
  p {
    font-family: Work Sans;
    font-weight: 400;
    font-size: 14px;
    position: relative;
    top: -20px;
  }
  h3 {
    font-family: Work Sans;
    font-weight: 200;
    font-size: 50px;
    text-transform: uppercase;
  }
  small {
    font-family: Work Sans;
    font-weight: 200;
    font-size: 20px;
  }
`;