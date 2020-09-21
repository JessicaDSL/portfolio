import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  min-height: 200px;
  display: flex;
  font-family: "Segoe UI", sans-serif;
  justify-content: space-between;
  align-items: center;
  a {
    color: #707070;
    padding: 0 40px 0 0;
    font-size: 1.3125rem;
    ${media.lessThan("500px")`
        padding: 0 10px;
        font-size: .8rem;
    `}
  }
  ${media.lessThan("500px")`
  min-height: 100px;
    `}
`;

export const Nav = styled.nav`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  ${media.lessThan("910px")`
  width: 30%;
  justify-content: center;
  `}
`;

export const List = styled.ul`
  display: flex;
  justify-content: flex-start;
  margin: 0 40px;
  li {
    margin: 0 15px;
    border-right: 1px solid rgba(0, 0, 0, 0.2);
    &:nth-child(3) {
      border: 0;
    }
    ${media.lessThan("400px")`
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
