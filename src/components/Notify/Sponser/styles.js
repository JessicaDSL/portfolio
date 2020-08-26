import styled from "styled-components";

export const Container = styled.div``;

export const List = styled.ul`
  padding: 0;
`;

export const ListItem = styled.li``;

export const Figure = styled.figure`
  background-color: #2ecc71;
  margin: 0 5px 20px 0;
  img {
    opacity: 1;
    transition: 0.3s ease-in-out;
    &:hover {
      opacity: 0.5;
    }
  }
`;
