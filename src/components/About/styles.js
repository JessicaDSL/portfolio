import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  background: #141628;
  color: #d1d5dc;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  ${media.between("medium", "huge")`
  width: 80%;
  h2 {
    margin: .8rem 0 0 0;
    font-size: x-large;
  }
  h3 {
    font-size: medium;
  }
  `}
  ${media.greaterThan("huge")`
  margin: 8rem 0 0 0;
  width: 80%;
  h2 {
    margin: .8rem 0 1rem 0;
    font-size: xx-large;
  }
  h3 {
    font-size: large;
  }
  `}
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem 0;
  width: 90%;
  div {
    margin: 1.4rem 0;
  }
  p {
    color: #d1d5dc;
    letter-spacing: 0.2px;
    font-size: medium;
    margin: 0;
  }
  a {
    button {
      margin: 0.5rem 0 4rem 0;
      background: #fd4370;
      border: none;
      color: #fff;
      font-weight: 600;
      letter-spacing: 0.2px;
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
    font-weight: 700;
    color: #fff;
    letter-spacing: 0.3px;
    font-size: large;
    margin: 0 0 1rem 0;
    hr {
      width: 1rem;
      height: 0.3rem;
      border-radius: 4px;
      border: none;
      background: #fd4370;
      margin: 0 0.5rem 0 0;
    }
  }
  ${media.greaterThan("medium", "huge")`
    display: flex;
    margin: 0.8rem 0 0rem 0;
    width: 100%;
    
    div {
      margin: 1.2rem 0;
    }
  p {
    margin: 0;
    font-size: large;
    max-width: 80%;
  }
  a {
    button {
      margin: 0.5rem 0 4rem 0;
      letter-spacing: 0.2px;
    height: 2rem;
    width: 10rem;
      font-size: small;
    }
  }
    span {
      font-size: x-large;
      margin: 0 0 .5rem 0;
      hr {
      width: .3rem;
      height: 0.2rem;
      margin: 0 .5rem 0 0;
    }
    }
  `}
  ${media.greaterThan("huge")`
  width: 92%;
  p {
    margin: 1rem 0;
    font-size: x-large;
    max-width: 75%;
  }
  a {
    button {
      margin: 0.8rem 0 6rem 0;
      letter-spacing: 0.2px;
    height: 3rem;
    width: 14rem;
      font-size: large;
    }
  }
  `}
`;

export const Content = styled.div`
  display: flex;
  width: 96%;
  opacity: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 0 3rem 0;
  ${media.greaterThan("medium")`
  flex-direction: row;
  width: 80%;
  `}
  ${media.greaterThan("huge")`
    width: 86%;
  `}
`;
