import styled from "styled-components";
import media from 'styled-media-query';

export const Container = styled.div`
  max-height: 100px;
  background: #212121;
  flex-basis: 30%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 65%;
  margin: 10px 0 0 30px;
  
    h1 {
    font-family: Lato;
    font-weight: bold;
    margin: 0 0 0 30px;
  }

  h4 {
    font-family: Lato;
    font-weight: lighter;
    text-transform: uppercase;
    font-size: small;
    margin: 0 0 0 30px;
  }

  span {
    color: #ff3448;
  }

  p {
    font-family: Lato;
    text-transform: uppercase;
    font-size: small;
    color: #595959;
    margin: 0 20px;
  }
  
  b {
    text-align: left;
    font-family: Lato;
    font-weight: bold;
  }
  ${media.lessThan("800px")`
  min-height: 150px;
  background: blue;
  justify-content: space-between;
  width: 90%;
  border-bottom: 3px solid #595959;
  b{
    margin: 0;
  }
  `}
`;

export const Content = styled.div`
${media.lessThan("800px")`
width: 100%;
  margin: 0 30px;
  background: blue;
  `}
`;

export const List = styled.ul`
`;

export const ListItem = styled.li`
`;
