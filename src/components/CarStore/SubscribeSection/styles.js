import styled from "styled-components";
import media from 'styled-media-query';

export const Container = styled.div`
  min-height: 450px;
  display: flex;
  justify-content: space-around;
  align-items: center;
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
  ${media.lessThan("900px")`
    flex-direction: column;
    text-align: center;
    
    hr {
      margin: 0 auto;
    }
    
  `}
`;

export const Content = styled.div`
  color: #ff3448;
  font-size: 15px;
  
  svg {
    color: #ffffff;
    width: 30px;
    height: 15px;
    margin: 15% 0;
  }
  
  a {
    margin: 10px;
  }
`;

export const ListItem = styled.li``;

export const List = styled.ul`
  display: flex;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  button {
      margin: 0 auto;
      background: blue;
    }
  label {
    color: #887979;
    font-size: small;
    font-family: Lato;
    padding: 20px 0;
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
    margin: 10px 0 130px 0;
  }
  ${media.lessThan("900px")`
    min-height: 400px;
    justify-content: space-around;
    button {
      margin: 0 auto;
    
    }
  `}
`;

export const Input = styled.input`
  background: #282828;
  height: 37px;
  margin: 0 0 20px 0;
  border: 0;
`;
