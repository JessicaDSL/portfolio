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

const type = keyframes`
  from {width: 0}
  to { width: 100% }
`;

const type2 = keyframes`
  0%{width: 0;}
  50%{width: 0;}
  100%{ width: 100; }
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
    padding: 1rem 0 0 0;
    font-size: x-large;
    overflow: hidden;
    font-family: "Ubuntu", sans-serif;
    white-space: nowrap;
    font-weight: 700;
    animation: ${type} 4s steps(60, end);
    &:nth-child(2) {
      animation: ${type2} 6s steps(60, end);
    }
    &:nth-child(3) {
      animation: ${type2} 8s steps(60, end);
    }
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
  ${media.between("medium", "large")`
    p {
      width: 100%;
      font-size: xx-large;
      margin: .2rem 0;
    }
  `}
  ${media.greaterThan("large")`
  width: 60%;
  p {
      width: 100%;
      font-size: 2.7vw;
      margin: .8rem 0;
    }
    span {
      margin: .8rem 0 0 0;
      font-size: 1.5vw;
    }
    a{
      button {
      margin: 3rem 0;
      height: 4vh;
      width: 15vw;
      font-size: 1.4vw;
    }
    }
  `}
`;

export const Image = styled.div`
  width: 70%;
  display: none;
  opacity: 0;
  background-image: url(${Background});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: 100% 100%;
  animation: ${animationDown} 5s linear;
  ${media.between("871px", "large")`
    width: 80%;
    display: flex;
    margin: 0rem 0 0 0;
    justify-content: center;
  `}
  ${media.greaterThan("large")`
    display: flex;
    position: relative;
    top: 1rem;
    width: 80%;
    background-size: 80% 100%;
  `}
`;
