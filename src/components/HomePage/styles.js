import styled from "styled-components";
import media from "styled-media-query";

/*
  ${media.between("medium", "large")`
    background: green;
  `}

*/

export const Section = styled.section`
  width: 100%;
  height: 500px;
  background-color: #141628;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.greaterThan("medium")`
    height: 450px;
  `}
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 86%;
  margin: 4rem 0 0 0;
  p {
    //font-size: xxx-large;
    font-size: x-large;
    opacity: 0;
    //overflow: hidden;
    white-space: nowrap;
    font-weight: 700;
    //padding: .5rem 0;
  }
  span {
    opacity: 0;
    font-weight: 500;
    color: #d1d5e8;
    font-size: smaller;
    letter-spacing: 0.5px;
  }
  button {
    margin: 2rem 0;
    background: #fd4370;
    border: none;
    color: #fff;
    font-weight: 600;
    letter-spacing: 0.2px;
    height: 3rem;
    width: 12rem;
    border-radius: 4px;
    font-size: small;
    opacity: 0;
    &:hover {
      background: #fb2e68;
      position: relative;
      top: -2px;
      transition: 0.7s ease;
    }
  }
  strong {
    color: #fd4370;
  }
  ${media.between("small", "medium")`
  p {
    font-size: xx-large;
  }
  span {
    font-size: medium;
  }
  button {
    font-size: medium;
  }
  `}
  ${media.greaterThan("medium")`
  width: 30%;
  padding: 0 1rem 0 0;
  margin: 0;
  p {
    font-size: medium;
  }
  span {
    font-size: x-small;
  }
  button {
    margin: 2rem 0;
    background: #fd4370;
    border: none;
    color: #fff;
    font-weight: 600;
    letter-spacing: 0.2px;
    height: 2.5rem;
    width: 10rem;
    border-radius: 4px;
    font-size: small;
    opacity: 0;
    &:hover {
      background: #fb2e68;
      position: relative;
      top: -2px;
      transition: 0.7s ease;
    }
  }
  `}
`;

export const Image = styled.div`
  width: 50%;
  display: none;
  height: 295px;
  margin: 0rem 0 0 0;
  opacity: 0;
  //background: blue;
  img {
    height: 220px;
    width: 100%;
    // background: gray;
  }
  ${media.greaterThan("medium")`
  display: flex;
    margin: 0rem 0 0 0;
    padding: 0 0 0 1.5rem;
    img {
    width: 90%;
    // background: gray;
  }
  `}
`;
