import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  margin: 0 0 5rem 0;
  h2 {
    margin: 2.2rem 0;
    font-size: xx-large;
    color: #fff;
    font-weight: 700;
  }
  p {
    max-height: 150px;
    overflow-y: scroll;
    margin: 1rem 0 0 0;
    color: #d1d5dc;
    letter-spacing: 0.1px;
    font-size: medium;
    padding: 0 1.5rem 0 0;
    &::-webkit-scrollbar {
      width: 10px;
      background-color: #141628;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: rgb(27, 30, 50);
      background-image: -webkit-gradient(
        linear,
        40% 0%,
        75% 84%,
        from(#535d9d),
        to(#4a528b),
        color-stop(0.6, #7e8ce7)
      );
    }
    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
      background-color: #141628;
      border-radius: 10px;
    }
  }
  a {
    button {
      margin: 2.5rem 0;
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
    font-weight: 600;
    color: #fff;
    letter-spacing: 0.3px;
    font-size: medium;
    margin: 0 0 2rem 0;
    hr {
      width: 1rem;
      height: 0.3rem;
      border-radius: 4px;
      border: none;
      background: #fd4370;
      margin: 0 0.5rem 0 0;
    }
  }
  ul {
    list-style: disc;
    padding: 0 0 0 1rem;
  }
  ${media.between("medium", "large")`
  h2 {
      margin: 1rem 0 2rem 0;
      font-size: xx-large;
    }
    p {
      max-height: 150px;
      margin: 1rem 0 1rem 0;
      font-size: large;
    }
    a {
      button {
      margin: 1.4rem 0;
      height: 2rem;
      width: 10rem;
      font-size: small;
      }
    }
    span {
      font-size: medium;
      margin: 0 0 1.8rem 0;
      hr {
        width: .3rem;
        height: 0.2rem;
        margin: 0 .5rem 0 0;
      }
    }
  `}
  ${media.greaterThan("large")`
  p {
      max-height: 190px;
      max-width: 85%;
      margin: 1rem 0 0rem 0;
      font-size: x-large;
    }
  `}
`;
