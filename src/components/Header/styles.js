import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  min-height: 350px;
  display: flex;
  font-family: "Segoe UI", sans-serif;
  justify-content: space-between;
  align-items: center;
  a {
    color: #707070;
    font-size: 0.7rem;
    letter-spacing: 1px;
    ${media.lessThan("700px")`
    font-size: .6rem;
    `}
    ${media.greaterThan("1600px")`
        margin: 0;
        font-size: 1.2rem;
    `}
  }
  ${media.lessThan("1600px")`
  min-height: 150px;
    `}
`;

export const Nav = styled.nav`
  display: flex;
  width: 40%;
  justify-content: flex-end;
  ${media.lessThan("910px")`
  justify-content: center;
  `}
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  li {
    display: flex;
    padding: 0 22px;
    border-right: 0.8px solid rgba(0, 0, 0, 0.2);
    &:nth-child(3) {
      border: 0;
    }
    ${media.lessThan("400px")`
    padding: 0 16px;
        margin: 0;
    `}
    
  }
`;

export const LineA = styled.div`
  width: 40%;
  height: 0.5px;
  background: rgba(0, 0, 0, 0.2);
  ${media.lessThan("910px")`
  width: 10%;
  `}
`;

export const LineB = styled.div`
  width: 10%;
  height: 0.5px;
  background: rgba(0, 0, 0, 0.2);
`;
