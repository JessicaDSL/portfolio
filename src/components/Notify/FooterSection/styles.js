import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  background-color: #e3e3e3;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    text-decoration: none;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 16px;
    color: #848484;
    cursor: pointer;
    margin: 0 20px 0 0;
    ${media.lessThan("medium")`
      font-size: 12px;
      margin: 0 10px 0 0;
      &:last-child {
        margin: 0 5px 0 0;
      }
    `}
  }
`;

export const List = styled.ul`
  display: flex;
  padding: 0;
`;

export const ListItem = styled.li``;
