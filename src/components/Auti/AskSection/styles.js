import styled from "styled-components";

export const Container = styled.div`
  font-family: Lato;
  color: rgb(72, 72, 72);
  hr {
    border-bottom: 5px solid #333232;
    margin-top: 0.6rem;
    width: 5rem;
    border-width: 0.25rem;
    border-style: solid;
    border-color: rgb(90, 89, 89);
    border-image: initial;
    height: 3px;
    margin: 0.5% 10%;
  }
  h2 {
    margin: 0 10%;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ListItem = styled.li`
  background-color: rgb(218, 216, 216);
  width: 1040px;
  margin: 10px 0;
  padding: 20px;
  border-radius: 10px;
  color: gray;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
