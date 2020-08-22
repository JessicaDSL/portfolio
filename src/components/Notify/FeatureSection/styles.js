import styled from "styled-components";

export const Container = styled.div`
  min-height: 335px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  strong {
    color: #222222;
    font-family: Raleway;
    font-size: medium;
    margin: 20px 0;
    font-size: large;
  }
  p {
    color: #848484;
    font-family: "Helvetica Neue", sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: lighter;
  }
`;

export const List = styled.ul`
  padding: 0;
`;

export const ListItem = styled.li`
  max-width: 330px;
  text-align: center;
`;
