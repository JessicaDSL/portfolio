import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-family: Gadugi;
    font-size: 3rem;
    margin: 1rem 0 0 0;
  }
  hr {
    color: #de3163;
    background-color: #de3163;
    width: 175px;
    height: 6px;
    margin: 0px 0px 0px 0px;
    border-radius: 10px;
    border: 0;
  }
`;



export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fcfbe3;
  height: 72vh;
  width: 90vw;
  border-radius: 10px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
  font-family: Lato;
  margin: 60px 0 0 0;

  img {
    
    &:hover {
      border:  4px solid #de3163;
    }
  }

  p {
    padding: 7px 0px 8px 30px;
  }
  span {
    svg {
      width: 25px;
      height: 25px;
    }
  }
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  height:80%;
  img{
    width: 90%;
    height: 350px;
    border-radius: 10px;
    margin: 0 40px;
  }
  ${media.lessThan("medium")`
    flex-direction: column;
    img{ 
      margin: 0px 0;
      width: 200px;
    }
    a{
      padding: 10px 10px;
    }
  `}
`;