import styled from "styled-components";

export const Container = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
    font-weight: lighter;
    font-size: medium;
    color: #887979;
    max-width: 385px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  
`;

export const List = styled.ul`
  font-family: Lato;
  font-weight: lighter;
  font-size: medium;
  color: #887979;
  max-width: 385px;
`;

export const ListItem = styled.li`
  display: flex;
  i {
    font-size: smaller;
    color: #9c1c28;
    padding: 6px 15px 12px 5px;
    display: flex;
    margin: 0 0 20px 0;
  }
`;
