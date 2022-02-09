import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  background: #1b1e32;
  width: 100%;
  color: #d1d5dc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ul {
    width: 80%;
    display: flex;
    justify-content: space-between;
    margin: 2.5rem 0;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 4rem;
      height: 4rem;
      background: #262a43;
      margin: 1rem;
      border-radius: 4px;
      cursor: pointer;
      &:hover {
        background: #313757;
        transition: 0.5s ease-in-out;
      }
      ${media.greaterThan("medium")`
    margin: 1rem 2rem 0 0;
    `}
    }
    ${media.greaterThan("medium")`
    justify-content: flex-start;
    margin: 1.5rem 0;
    `}
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  width: 86%;
  margin: 3rem 0 0.3rem 0;
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
    font-size: large;
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
  ${media.greaterThan("medium")`
  width: 80%;
  margin: 1.8rem 0 0rem 0;
  h2 {
    margin: .8rem 0 0 0;
    font-size: small;
  }
  h3 {
    font-size: small;
  }
  `}
`;

export const Email = styled.div`
  margin: 3rem 0 0 0;
  font-size: small;
  width: 100%;
  display: flex;
  justify-content: center;
  p {
    width: 86%;
    span {
      color: #fd4370;
      font-size: medium;
    }
    ${media.greaterThan("medium")`
  width: 80%;
  `}
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 87%;
  margin: 1.2rem 0;
  input {
    background: #141628;
    border: 1px solid #d1d5dc;
    height: 3rem;
    border-radius: 4px;
    margin: 0.5rem 0 1.8rem 0;
    color: #fff;
    padding: 0 1rem;
  }
  textarea {
    background: #141628;
    border: 1px solid #d1d5dc;
    color: #fff;
    border-radius: 4px;
    margin: 0.5rem 0;
    padding: 1rem;
    font-size: medium;
  }
  button {
    margin: 2rem 0 3rem 0;
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
  ${media.greaterThan("medium")`
  width: 80%;
  `}
`;

export const Input = styled.div``;
