import styled from "styled-components";

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
    margin:150px 0 0 0;
  }
`;

export const LightGrayContent = styled.div`
  display: flex;
  background: #303030;
  width: 50%;
  height: 405px;
  float: left;
  
  img {
    width: 400px;
    height: 300px;
    margin: 50px 0 0 30px;
  }
`;

export const DarkGrayContent = styled.div`
  display: flex;
  background: #1c1c1c;
  width: 50%;
  height: 405px;
  float: left;
`;
