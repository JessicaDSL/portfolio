import styled from "styled-components";
import media from "styled-media-query";

/*
${media.greaterThan("large")`
  
  `}*/

export const Container = styled.div`
  background: #141628;
  position: fixed;
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  ${media.greaterThan("large")`
  height: 4.5rem;
  `}
`;

export const Content = styled.div`
  width: 87%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${media.greaterThan("medium")`
  width: 81%;
  `}
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #eee;
  font-size: small;
  svg {
    display: flex;
  }
  span {
    position: relative;
    right: 10px;
  }
  b {
    font-size: large;
    position: relative;
    bottom: 1px;
  }
  ${media.greaterThan("huge")`
  font-size: medium;
  `}
`;

export const Nav = styled.nav`
  display: none;
  margin: 0 1.8rem 0 0;
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
  ${media.greaterThan("small")`
  display: flex;
  ul {
    li {
    margin: 0 0 0 1rem;
    font-size: xx-small;
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
  ${media.greaterThan("small")`
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
    }
  }
  ${media.between("small", "medium")`
    background: yellow;
  `}
`;
