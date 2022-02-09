import { createGlobalStyle } from "styled-components";

import Pacifico from '../assets/fonts/Pacifico-Regular.ttf' 

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap');
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
  font-family: "Roboto", sans-serif;
}

@font-face {
    font-family: Pacifico;
    src: url(${Pacifico});
  }


  `;
