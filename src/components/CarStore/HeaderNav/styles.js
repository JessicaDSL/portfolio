import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div``;

export const Nav = styled.nav`
  background-color: #030303;
  min-height: 55px;
  font-family: Lato;
  font-weight: bolder;
  text-transform: uppercase;
  font-size: smaller;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  a {
    color: #ffffff;
    margin: 0 0 0 40px;
    ${media.lessThan("500px")`
    margin: 5% 0;
    `}
  }

  ${media.lessThan("500px")`
    justify-content: flex-start;
    align-content: center;
    min-height: 200px;
  `}
`;

export const List = styled.ul`
  display: flex;
  width: 100%;
  ${media.lessThan("500px")`
    flex-direction: column;
    justify-content: center;
  `}
`;

export const ListItem = styled.li`
  ${media.lessThan("500px")`
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    display: flex;
  `}
`;
