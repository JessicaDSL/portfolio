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
    width: 84%;
    display: flex;
    justify-content: flex-start;
    margin: 1rem 0;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 4rem;
      height: 4rem;
      background: #262a43;
      margin: 0 1rem 0 0;
      border-radius: 4px;
      cursor: pointer;
      svg {
        font-size: xx-large;
      }
      &:hover {
        background: #313757;
        transition: 0.5s ease-in-out;
      }
    }
    ${media.between("medium", "huge")`
    justify-content: flex-start;
    margin: 0;
    width: 80%;
    margin: 1rem 0;
      li {
        margin: 0 2rem 0 0;
      svg {
        font-size: xxx-large;
      }
    }
    `}

    ${media.greaterThan("huge")`
    justify-content: flex-start;
    margin: 0;
    width: 80%;
    margin: 1.2rem 0;
      li {
        width: 4.8rem;
        height: 4.8rem;
        margin: 0 2rem 0 0;
      svg {
        font-size: xxx-large;
      }
      }
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
  margin: 7rem 0 0 0;
  h2 {
    margin: .8rem 0 0 0;
    font-size: x-large;
  }
  h3 {
    font-size: medium;
  }
  `}
  ${media.greaterThan("huge")`
  width: 80%;
  margin: 8rem 0 0 0;
  h2 {
    margin: .8rem 0 0 0;
    font-size: xx-large;
  }
  h3 {
    font-size: large;
  }
  `}
`;

export const Email = styled.div`
  margin: 1.5rem 0 0.8rem 0;
  font-size: medium;
  width: 100%;
  display: flex;
  justify-content: center;
  p {
    width: 86%;
    span {
      color: #fd4370;
      font-size: medium;
    }
    ${media.between("medium", "huge")`
      width: 80%;
      font-size: medium;
      margin: 1rem 0 .4rem 0;
      font-size: large;
      span {
          font-size: large;
        }
      `}
    ${media.greaterThan("huge")`
      width: 80%;
      font-size: medium;
      margin: 1rem 0 .4rem 0;
      font-size: x-large;
      span {
          font-size: x-large;
        }
    `}
  }
`;
