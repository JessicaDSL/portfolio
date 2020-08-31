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
  h1 {
    margin: 0 0 0 8px;
    color: #f5f5f5;
    font-family: Lato;
  }
  ${media.lessThan("321px")`
    height: 45px;
    h1 {
      margin: 0 0 0 4px;
    }
  `}

  ${media.lessThan("1024px")`
  background: #111111;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
  `};
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 0 20px;
  img {
    width: 55px;
    height: 45px;
  }
  ${media.lessThan("769px")`
  margin: 0 0 0 10px;
  img {
    height: 35px;
    width: 45px;
  }
  `}
  ${media.between("769px","1024px" )`
  img {
    height: 35px;
    width: 45px;
  }
  `};
  ${media.between("1024px","2000px" )`
  img {
    height: 40px;
    width: 50px;
  }
  `}
  ${media.greaterThan("2000px")`
  img {
    height: 45px;
    width: 55px;
  }
  `}

  
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  z-index: 2;
  h1 {
    font-size: 14px;
    padding: 16px 12px;
    letter-spacing: 2px;
    background: none;
    border: 0;
    color: #f5f5f5;
    transition: 0.2s all ease-in;
    font-family: Lato;
    &:hover {
      border-bottom: 6px solid #de3163;
      color: #de3163;
    }
  }
  
  ${media.lessThan("769px")`
  flex-flow: column nowrap;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(100%)")};
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  padding-top: 3.4rem;
  transition: transform 0.3s ease-in-out;
  `}
  ${media.greaterThan("770px" )`
  margin: 0 15px 0 0;
  h1 {
    font-size: 14px;
  }
      
  `};
`;

export const StyledBurguer = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;


  ${media.lessThan("326px")`
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  top: 8px;
  right: 11px;
  `}
  ${media.between("326px","769px")`
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  top: 10px;
  right: 11px;
  `};
  ${media.greaterThan("769px")`
    display: none;
  `}
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
