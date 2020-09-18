import styled from "styled-components";
import media from 'styled-media-query';

export const Container = styled.div`
width: 35%;
  b {
    color: #ff3448;
    padding: 40px;
    ${media.lessThan("500px")`
    padding: 10%;
  `}
  }

  p {
    font-family: Lato;
    text-transform: uppercase;
    font-size: small;
    text-align: center;
    margin: 5px 0;
  }

  a {
    color: white;
  }
  ${media.lessThan("500px")`
  min-height: 150px;
  display: none;
  background: red;
  width: 100%;
  `}
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.lessThan("500px")`
  `}
`;

export const ListItem = styled.li`
  height: 70px;
  width: 30%;
  display: flex;
  align-items: center;
  border-left: 3px solid #595959;
  ${media.lessThan("500px")`
  background: blue;
  &:nth-child(1) {
    border-left: none;
    
    }
  `}
  
`;
