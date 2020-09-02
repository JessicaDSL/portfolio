import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  min-height: 705px;
  display: flex;
  flex-direction: column;
  background-color: #282828;
  hr {
    height: 6px;
    color: #9c1c28;
    width: 172px;
    background-color: #9c1c28;
    opacity: 1;
    margin: 0 auto;
    border: 0;
  }

  h1 {
    font-size: x-large;
    letter-spacing: 2px;
    font-family: Lato;
    text-transform: uppercase;
    text-align: center;
    margin: 80px 0 20px 0;
    color: #ffffff;
  }
`;

export const Content = styled.div`
  p {
    color: #ff3448;
    font-size: small;
    text-align: center;
    text-transform: uppercase;
    font-family: Lato;
  }
  b {
    font-family: Lato;
    font-size: large;
    text-align: center;
    color: #ffffff;
    svg {
      font-size: small;
      color: #d73444;
      letter-spacing: 0px;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ListItem = styled.li`
  margin: 0 20px 0 0;
  background-color: #363636;
  height: 300px;
  display: flex;
  flex-direction: column;
  ${media.lessThan("1300px")`
  flex-direction: column;
  padding: 20px;
  margin: 20px 0;
  `}
`;
