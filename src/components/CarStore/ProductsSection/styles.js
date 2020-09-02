import styled from 'styled-components';

export const Container = styled.div`
  min-height: 810px;
  width: 100%;
`;

export const Content = styled.div`
   height: 100%;
   width: 100%;
   p {
    font-family: Lato;
    color: #979696;
    display: flex;
    flex-wrap: nowrap;
  }
  h1 {
    font-family: Lato;
    color: #ffffff;
    text-transform: uppercase;
    font-size: xx-large;
  }
`;

export const LightGrayContentA = styled.div`
  background: #303030;
  width: 50%; 
   height: 405px; 
   float: left;
`;

export const DarkGrayContentA = styled.div`
  background: #1c1c1c;
  width: 50%; 
  height: 405px; 
   float: left;
`;

export const DarkGrayContentB = styled.div`
  background: #1c1c1c;
  width: 50%; 
  height: 405px; 
   float: left;
`;

export const LightGrayContentB = styled.div`
  background: #303030;
  width: 50%; 
  height: 405px; 
   float: left;
`;