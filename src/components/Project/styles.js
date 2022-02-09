import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
margin: 0 0 3rem 0;
  h2 {
    margin: 2.2rem 0;
    font-size: x-large;
    color: #fff;
    font-weight: 700;
  }
  p {
    max-height: 100px;
    overflow-y: auto;
    margin: 1rem 0 0 0;
    color: #d1d5dc;
    letter-spacing: .1px;
    font-size: small;
    &::-webkit-scrollbar { 
	display: none;
}
  }
  a {
    button {
    margin: 2.5rem 0;
    background: #fd4370;
    border: none;
    color: #fff;
    font-weight: 600;
    letter-spacing: .2px;
    height: 3rem;
    width: 12rem;
    border-radius: 4px;
    font-size: small;
    &:hover {
      background: #fb2e68;
      position: relative;
      top: -2px;
      transition: 0.7s ease;
    }
  }
  }
  span {
    display: flex;
    align-items: center;
    font-weight: 500;
    color: #fff;
    letter-spacing: .3px;
    font-size: small;
    margin: 0 0 2rem 0;
    hr {
      width: 1rem;
      height: 0.3rem;
      border-radius: 4px;
      border: none;
      background: #fd4370;
      margin: 0 .5rem 0 0;
    }
  }
  ul {
    list-style: disc;
    padding: 0 0 0 1rem;
  }
  ${media.greaterThan("medium")`
  h2 {
    margin: 1rem 0;
    font-size: medium;
  }
  p {
    max-height: 100px;
    margin: 0;
    font-size: xx-small;
  }
  a {
    button {
    margin: 1rem 0;
    height: 2rem;
    width: 8rem;
    font-size: x-small;
  }
  }
  span {
    font-size: xx-small;
    margin: 0 0 1rem 0;
    hr {
      width: .3rem;
      height: 0.2rem;
      margin: 0 .5rem 0 0;
    }
  }
  `}
`;
