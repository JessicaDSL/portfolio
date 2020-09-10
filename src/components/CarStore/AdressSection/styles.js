import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  min-height: 400px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: Lato;
  font-size: medium;
  color: #887979;

  hr {
    color: #9c1c28;
    background-color: #9c1c28;
    width: 90px;
    height: 6px;
    margin: 10px 0 36px 0;
    border: 0;
  }

  h1 {
    font-family: Lato;
    font-size: 25px;
    margin: 85px 0 0 0;
    color: #ffffff;
  }

  p {
    font-family: Lato;
    font-size: medium;
    color: #887979;
    max-width: 370px;
    margin: 18px 0;
  }

  svg {
    font-size: smaller;
    color: #9c1c28;
    margin: 0 5px;
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

  hr {
    margin: 5px 0 36px 0;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li``;
