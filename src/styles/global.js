import { createGlobalStyle } from 'styled-components';
import media from "styled-media-query";

import Gadugi from '../assets/fonts/gadugi-2.ttf';
import FiraCodeRetina from '../assets/fonts/fira-code-retina-maisfontes/fira-code-retina.ttf';
import Roboto from '../assets/fonts/roboto/Roboto-Regular.ttf'
import FiraCode from '../assets/fonts/Fira_Code/FiraCodet.ttf';


export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

 

  body {
    -webkit-font-smoothing: antialiased !important;
    ${media.lessThan("360px")`
      font-size: 12px;
    `}
    font-family: Roboto;
    background: #fff;
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

  @font-face {
    font-family: Gadugi;
    src: url(${Gadugi});
  }

  @font-face {
    font-family: Roboto;
    src: url(${Roboto});
  }

@import url('https://fonts.googleapis.com/css2?family=Roboto:400,700&display=swap');


  @font-face {
    font-family: FiraCodeRetina;
    src: url(${FiraCodeRetina});
  }

  @font-face {
    font-family: FiraCode;
    src: url(${FiraCode});
  }
`;
