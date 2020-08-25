import styled from "styled-components";
import media from "styled-media-query";

export const Nav = styled.nav`
  width: 100%;
  height: 55px;
  background: rgba(0, 0, 0, 0.7);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${media.lessThan("1024px")`
  background: #111111;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
  position: fixed;
  `};
`;

export const Logo = styled.div`
  margin: 0 0 0 70px;
  display: flex;
  color: #f1f1f1;
  font-family: Lato;

  h1 {
    margin: 0 0 0 8px;
  }

  img {
    width: 45px;
    height: 35px;
  }

  ${media.lessThan("1024px")`
      margin: 0 0 0 30px;
  `};
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  color: white;

  li {
    cursor: pointer;
    font-family: Lato;
    font-weight: bold;
    font-size: 16px;
  }

  ${media.lessThan("1024px")`
  flex-flow: column nowrap;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(100%)")};
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
  `}
`;

export const Btn = styled.button`
  padding: 16px 22px;
  letter-spacing: 2px;
  background: none;
  border: 0;
  color: #f5f5f5;
  font-weight: 500;
  font-size: 18px;
  transition: 0.2s all ease-in;

  &:hover {
    border-bottom: 4px solid #de3163;
    color: #de3163;
  }
`;

export const StyledBurguer = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  
  ${media.lessThan("1024px")`
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  `};

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#db7093" : "#f1f1f1")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
