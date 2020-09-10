import styled from 'styled-components';
import media from 'styled-media-query';


export const Container = styled.div`
  display: flex;
  align-content: center;
  width: 100%;
  justify-content: center;
  align-items: center;
  min-height: 128px;
  background-color: rgb(229, 226, 226);
  font-family: Lato;

  img {
    width: 240px;
    height: 240px;
    ${media.lessThan('medium')`
      display: none;
    `}
  }

  p {
    font-size: 30px;
    color: rgb(121, 120, 120);
    margin: 0 20px;
  }

  time {
    color: rgb(145, 144, 144);
    font-size: small;
    margin: 0 20px;
  }
  
  div{
    display: flex;
    ${media.lessThan('medium')`
      flex-direction: column;
    `}
  }
`;


export const Count = styled.div`
  width: 144px;
  height: 60px;
  background-color: white;
  border: 1px solid rgb(121, 120, 120);
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(218, 16, 128);
  font-size: 22px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 70px;
`