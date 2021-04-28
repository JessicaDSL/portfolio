import styled from "styled-components";

export const Container = styled.div`
  min-height: 780px;
  padding: 60px 0 0 0;
  background-color: rgb(14, 162, 211);
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Lato;

  div {
    width: 80%;
  }

  b {
    padding: 10px 20px;
    border: 1px solid #ffffff;
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
    margin: 20px 0 0 20px;
  }

  h2 {
    font-size: 2.3rem;

    span {
      font-size: 1.8rem;
    }
  }

  hr {
    border-bottom: 5px solid #ffffff;
    margin-top: 0.6rem;
    width: 5rem;
    border-width: 0.25rem;
    border-style: solid;
    border-color: rgb(255, 255, 255);
    border-image: initial;
    margin: 5px 0 30px 0;
    height: 3px;
  }

  button {
    background-color: rgb(218, 16, 128);
    border-bottom-color: rgb(255, 255, 255);
    border: 0;
    color: #ffffff;
    padding: 16px 56px;
    border-radius: 5px;
    font-size: 16px;
    margin: 20px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li`
  display: flex;
  margin: 15px 0;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
