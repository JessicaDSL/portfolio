import styled from "styled-components";
import media from 'styled-media-query';


export const Container = styled.div`
  font-family: Lato;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 540px;

  p {
    font-size: 16px;
    padding: 20px 0 0 0;
    color: rgb(128, 128, 128);
    max-width: 500px;
  }

  button {
    background-color: rgb(218, 16, 128);
    color: #ffffff;
    border-bottom-color: rgb(255, 255, 255);
    border: 0;
    padding: 16px 56px;
    border-radius: 5px;
    font-size: 16px;
    margin: 20px 0;
  }
`;


export const Main = styled.main`
  width: 80%;
  display: flex;
  
  img{
    height: 400px;
    margin: 0 50px 0 0;
    position: relative;
    top: 50px;
    ${media.lessThan('1026px')`
      display: none;
    `}
  }
`;



export const Content = styled.div`
  height: 205px;
  background-color: rgb(14, 162, 211);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 0 6% 0;
  p {
    max-width: 900px;
    text-align: center;
    color: #ffffff;
    display: flex;
    font-size: 16px;
    font-family: Lato;
    ${media.lessThan('medium')`
      margin: 0 10px;
    `}
  }
`;

