import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
  
  body {
    font-family: 'Open Sans', sans-serif;
  }
  
  html {
  scroll-behavior: smooth;
  }
`;
