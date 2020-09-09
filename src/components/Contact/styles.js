import styled from "styled-components";

export const Container = styled.div`
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fcfbe3;
  height: 60vh;
  width: 70vw;
  border-radius: 10px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
  font-family: Lato;
  a {
    color: #fcfbe3;
    font-size: 1.3rem;
    background: #080806;
    padding:  10px 20px;
    border-radius: 10px;
    
  }

  p {
    padding: 7px 0px 8px 30px;
  }
  span {
    svg {
      width: 25px;
      height: 25px;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-self: center;
`;

export const ListItem = styled.li`
  margin: 5px;
  border-radius: 10px;
`;

export const Main = styled.main`
  img {
    margin: 0 0 30px 0;
  }
`;

export const Aside = styled.aside`
  h3 {
    color: #080806;
    font-size: 1.6rem;
    margin: 0 0 10px 0;
  }
  img {
    width: 90%;
    height: 80%;
  }
`;
