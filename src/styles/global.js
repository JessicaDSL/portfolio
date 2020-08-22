import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

 body, html {
   height: 100%100%
 }

  body {
    -webkit-font-smoothing: antialiased !important;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;
