import { createGlobalStyle } from 'styled-components';
import media from "styled-media-query";

import Gadugi from '../assets/fonts/gadugi-2.ttf';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

 body, html, #root {
   height: 100% 100%;
   background-color: #FBD4CC;
 }

  body {
    -webkit-font-smoothing: antialiased !important;
    ${media.lessThan("360px")`
      font-size: 12px;
    `}
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
`;
