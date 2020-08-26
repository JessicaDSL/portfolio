import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  height: 427px;
  display: flex;
  background-color: #e3e3e3;
  justify-content: space-around;
  align-items: center;
`;

export const Content = styled.div`
  strong {
    color: #222222;
    font-family: Raleway;
    font-size: 20px;
    max-width: 550px;
  }
  p {
    color: #848484;
    font-family: "Helvetica Neue", sans-serif;
    font-size: 16px;
    line-height: 24px;
    text-align: left;
    max-width: 550px;
    margin: 45px 0;
  }
  input {
    border-radius: 10px 0 0 10px;
    width: 305px;
    border: 1px solid #c8c8c8;
    color: #848484;
    font-size: 18px;
    font-family: "Helvetica Neue", sans-serif;
    padding: 11px;
  }
  button {
    cursor: pointer;
    border-radius: 0 10px 10px 0;
    border: 0;
    background-color: #2ecc71;
    color: #ffffff;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 22px;
    padding: 10px 20px;
  }
  ${media.lessThan("500px")`
    height: 300px;
    button {
    width: 100px;
    height: 55px;
    border-radius: 0 10px 10px 0;
    border: 0;
    background-color: #2ecc71;
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 18px;
  }
  form {
    margin: 20px 20px;
  }
  p {
  color: #848484;
  font-family: "Helvetica Neue", sans-serif;
  font-size: 14px;
  line-height: 14px;
  max-width: 550px;
  margin: 20px 20px;
  text-align: left;
  }
  strong {
  margin: 20px 20px;
  }

  `}

  ${media.between("501px", "1020px")`
    h1 {
      margin:20px;
    }
    form {
      margin: 20px;
      `}
    p {
    margin: 20px;
  }
`;

export const Form = styled.form`
  display: flex;
`;

export const Iframe = styled.iframe`
  display: flex;
  align-items: center;
  ${media.lessThan("500px")`
  display: none;
  `}
  ${media.between("501px", "1020px")`
    display: none;
  `}
`;
