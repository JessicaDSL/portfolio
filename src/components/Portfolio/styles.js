import styled from "styled-components";
import media from "styled-media-query";

import Bg from "../../assets/image/Portfolio/bg.png";

export const Background = styled.div`
  width: 100%;
  background: rgba(27, 30, 50);
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${media.greaterThan("medium")`
    
  `}
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  width: 86%;
  margin: 6rem 0 0.3rem 0;
  p {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  h2 {
    width: 100%;
    display: flex;
    color: #fff;
    font-weight: 600;
    margin: 1rem 0 0 0;
    font-size: x-large;
  }
  hr {
    height: 0.2rem;
    width: 1.5rem;
    background: #fd4370;
    border: none;
    border-radius: 2px;
  }
  h3 {
    color: #d1d5dc;
    font-weight: 600;
    font-size: medium;
    letter-spacing: 0.9px;
    margin: 0 0 0 0.5rem;
  }
  ${media.between("medium", "large")`//1170
  //background: red;
  width: 80%;
    margin: 6rem 0 1rem 0;
    h2 {
      margin: .8rem 0 0 0;
      font-size: x-large;
    }
    h3 {
      font-size: medium;
    }
  `}
  ${media.greaterThan("large")`
    width: 80%;
  `}
`;

export const Container = styled.div`
  width: 86%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  button {
    color: #fff;
    border: none;
    background: none;
  }
  ${media.greaterThan("medium")`
    flex-direction: row;
    width: 80%;
    
    justify-content: flex-start;
    margin: 1.5rem 0 0 0;
  `}
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  opacity: 0;
  ${media.greaterThan("medium")`
  `}
`;

export const Arrows = styled.div`
  margin: 0.8rem 0 0 0;
  display: flex;
  align-items: center;
  svg {
    font-size: large;
    background: #262a43;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background: #313757;
      transition: 0.5s ease-in-out;
    }
  }
  strong {
    margin: 0 1rem;
  }
  ${media.between("medium", "large")`//1170
    //background: blue;
    margin: 0.8rem 0 1.2rem 0;
    svg {
    font-size: large;
    width: 2.8rem;
    height: 2.8rem;
  }
  `}
`;

export const Image = styled.div`
  width: 100%;
  margin: 4rem 0;
  display: flex;
  justify-content: center;
  padding: 0 0 0 2rem;
  background-image: url(${Bg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  img {
    width: 90%;
    margin: 0 0 0 0rem;
    opacity: 1;
  }
  ${media.between("medium", "large")`
    background-size: 90% 100%;
    //background: red;
    a{
     // background: blue;
      display: flex;
      justify-content: flex-end;
    }
    //align-items: flex-end;
    padding: 0;
    margin: 0;
    img {
     // padding: 0 0 0 2rem;
      width: 90%;
      justify-content: flex-end;
      //height: 175px;
      //background: gray;
    }
  `}
  ${media.greaterThan("medium")`
    
  `}
`;
