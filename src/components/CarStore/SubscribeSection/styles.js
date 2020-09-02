import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  font-family: Lato;
  h1 {
    text-transform: uppercase;
    font-size: 25px;
    color: #ffffff;
    margin: 30px 0 0 0;
  }
  hr {
    color: #9c1c28;
    background-color: #9c1c28;
    width: 90px;
    height: 6px;
    margin: 10px 0;
    border: 0;
  }
  
`;

export const Content = styled.div`
  color: #ff3448;
  font-size: 15px;
`;

export const ListItem = styled.li``;

export const List = styled.ul``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  label {
    color: #887979;
    font-size: smaller;
    font-family: Lato;
    padding: 8px 0;
    max-width: 345px;
  }
  
  button {
    height: 38px;
    width: 142px;
    background-color: #9c1c28;
    color: #ffffff;
    cursor: pointer;
    border-radius: 20px;
    border: 0px solid;
    font-size: 20px;
    font-family: Lato;
    font-weight: bold;
    text-transform: uppercase;
  }
  svg{
    color: white;
  }
`;

export const Label = styled.label``;

export const Button = styled.button``;

export const Input = styled.input`
  background: #282828;
  height: 37px;
  margin: 0 0 20px 0;
  border: 0;
`;
