import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  background: #141628;
  position: fixed;
  width: 100%;
  height: 6vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  ${media.greaterThan("huge")`
  height: 10vh;
  `}
`;

export const Content = styled.div`
  width: 88%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${media.greaterThan("medium")`
    width: 80%;
  `}
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #eee;
  font-size: large;
  svg {
    display: flex;
  }
  span {
    position: relative;
    right: 10px;
  }
  b {
    font-size: x-large;
    position: relative;
    bottom: 1px;
  }
  ${media.greaterThan("huge")`
    font-size: 1.8vw;
    b{
      font-size: 2vw;
    }
  `}
`;

export const Nav = styled.nav`
  display: none;
  color: #d1d5e8;
  a {
    text-decoration: none;
    color: #d1d5e8;
  }
  ul {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    li {
      font-weight: 600;
      font-size: small;
      cursor: pointer;
      &:hover {
        color: #fff;
        transition: 0.5s ease-in;
      }
    }
  }
  ${media.greaterThan("600px")`
    display: flex;
    span{
      color: rgba(255, 255, 255, .1);
    }
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      li {
      margin: 0 1rem;
      font-size: medium;
      font-family: 'Lato', sans-serif;
      }
    }
  `}
  ${media.greaterThan("huge")`
    ul {
      li {
        font-size: 1.6vw;
      }
    }
  `}
`;

export const MenuDropdow = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
  align-items: flex-end;
  button {
    background-color: #fd4370;
    color: white;
    border: none;
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 4px;
  }
  ${media.greaterThan("600px")`
    display: none;
  `}
`;

export const List = styled.ul`
  display: ${({ state }) => (state ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  background: #1b1e32;
  z-index: 1;
  top: 70%;
  min-width: 90px;
  border-radius: 4px;
  li {
    color: #fff;
    font-weight: 500;
    margin: 0rem 0;
    padding: 1rem 0.5rem;
    border-bottom: #eee;
    &:hover {
      background-color: #515885;
      border-radius: 4px;
    }
  }
  ${media.between("small", "medium")`
  `}
`;
