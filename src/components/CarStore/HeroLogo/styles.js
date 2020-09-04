import styled from "styled-components";

export const Container = styled.div`
  max-height: 100px;
  background: #212121;
  flex-basis: 30%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 65%;
  margin: 10px 0 0 30px;

  h1 {
    font-family: Lato;
    font-weight: bold;
    margin: 0 0 0 30px;
  }

  h4 {
    font-family: Lato;
    font-weight: lighter;
    text-transform: uppercase;
    font-size: small;
    margin: 0 0 0 30px;
  }

  span {
    color: #ff3448;
  }

  p {
    font-family: Lato;
    text-transform: uppercase;
    font-size: small;
    color: #595959;
    margin: 0 20px;
  }
  
  b {
    margin: 0 0 0 215px;
    font-family: Lato;
    font-weight: bold;
  }
`;

export const Content = styled.div``;

export const List = styled.ul`
list-style: none;
`;

export const ListItem = styled.li`
`;
