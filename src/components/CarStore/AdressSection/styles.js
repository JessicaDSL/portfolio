import styled from "styled-components";
import media from 'styled-media-query';

export const Container = styled.div`
  min-height: 400px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  hr {
    color: #9c1c28;
    background-color: #9c1c28;
    width: 90px;
    height: 6px;
    margin: 10px 0 36px 0;
    border: 0;
    margin: 15px 10px;
  }
  h1 {
    font-family: Lato;
    font-size: 25px;
    margin: 85px 0 0 0;
    color: #ffffff;
    margin: 5px 10px;
  }

  p {
    font-family: Lato;
  
    font-size: medium;
    color: #887979;
    max-width: 370px;
    margin: 5px 10px;
  }
  ${media.lessThan("900px")`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 385px;
`;

export const List = styled.ul`
  font-family: Lato;
  font-weight: lighter;
  font-size: medium;
  color: #887979;
  height: 200px;
`;

export const ListItem = styled.li`
  display: flex;
  margin: 10px 0;
  p {
    font-family: Lato;
    font-size: medium;
    color: #887979;
    max-width: 370px;
    margin: 5px 10px;
  }
  svg {
    font-size: smaller;
    color: #9c1c28;
    padding: 6px 15px 12px 0;
    display: flex;
    margin: 0 0 30px 0;
  }
`;
