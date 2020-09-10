import styled from "styled-components";

export const Container = styled.div`
  b {
    color: #ff3448;
    padding: 40px;
  }

  p {
    font-family: Lato;
    text-transform: uppercase;
    font-size: small;
    text-align: center;
    margin: 5px 0;
  }

  a {
    color: white;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-items: center;
  align-items: center;
`;

export const ListItem = styled.li`
  height: 70px;
  width: 100px;
  display: flex;
  justify-items: center;
  align-items: center;
  border-left: 3px solid #595959;
  justify-items: center;
`;
