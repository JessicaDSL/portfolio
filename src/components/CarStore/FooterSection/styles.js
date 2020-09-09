import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  min-height: 135px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #ffffff;
  font-family: Lato;

  p {
    font-weight: lighter;
    color: #887979;
    font-size: smaller;
  }

  h5 {
    font-size: 15px;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 980px;

  ${media.lessThan("550px")`
    flex-direction: column;
  `}
`;

export const List = styled.ul`
  display: flex;
`;

export const ListItem = styled.li`
  svg {
    color: #fff;
    margin: 0 5px;
    width: 20px;
    height: 20px;
  }
`;
