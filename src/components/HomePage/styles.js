import styled, { keyframes } from "styled-components";
import media from "styled-media-query";
import Background from "../../assets/image/HomePage/backgroundHomee.png";

const animationDown = keyframes`
from {
  -webkit-transform: translateY(0%);
  transform: translateY(0%);
  visibility: visible;
  }
  to{
  -webkit-transform: translateY(100);
  transform: translateY(100);
  }
`;

export const Section = styled.section`
  width: 100%;
  background-color: #141628;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.between("large", "huge")`
 // align-items: flex-end;
  `}
  ${media.greaterThan("large")`
  //align-items: center;
  `}
`;

export const Container = styled.div`
  display: flex;
  width: 86%;
  margin: 8rem 0 5rem 0;
  ${media.greaterThan("medium")`
    width: 80%;
    margin: 16rem 0 8rem 0;
  `}
  ${media.greaterThan("medium")`

  `}
  ${media.between("large", "huge")`
  
  `}
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 86%;
  margin: 4rem 0 0 0;
  p {
    font-size: x-large;
    font-family: "Ubuntu", sans-serif;
    opacity: 0;
    white-space: nowrap;
    font-weight: 700;
  }
  span {
    margin: 0rem 0 0 0;
    font-family: "Work Sans", sans-serif;
    opacity: 0;
    font-weight: 500;
    color: #d1d5e8;
    font-size: smaller;
    letter-spacing: 0.5px;
  }
  button {
    font-family: "Work Sans", sans-serif;
    margin: 2rem 0;
    background: #fd4370;
    border: none;
    color: #fff;
    font-weight: 600;
    letter-spacing: 0.2px;
    height: 3rem;
    width: 12rem;
    border-radius: 4px;
    font-size: medium;
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
  ${media.between("medium", "large")`
    width: 85%;
    margin: 0;
   // background: red;
    justify-content: center;
    p {
      width: 100%;
      font-size: x-large;
      margin: .2rem 0;
    }
    span {
      font-size: small;
    }
    button {
      margin: 2rem 0;
      height: 2.5rem;
      width: 10rem;
    }
  `}
  ${media.greaterThan("large")`
    p {
      width: 100%;
      font-size: xxx-large;
      margin: .2rem 0;
    }
  `}
`;

export const Image = styled.div`
  width: 70%;
  display: none;
  opacity: 0;
  background-image: url(${Background});
  background-size: 80% 100%;
  background-repeat: no-repeat;
  background-position: 100% 100%;
  animation: ${animationDown} 5s linear;
  ${media.between("medium", "large")`
    width: 80%;
    display: flex;
  ////  background: blue;
      margin: 0rem 0 0 0;
      justify-content: center;
  `}
  ${media.greaterThan("large")`
      display: flex;
      position: relative;
      top: 1rem;
      width: 80%;
  `}
`;
