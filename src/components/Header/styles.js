import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  min-height: 200px;
  display: flex;
  font-family: 'Segoe UI', sans-serif;
  justify-content: space-between;
  align-items: center;
  a {
    color: #707070;
    padding: 0 40px 0 0;
    font-size: normal;
  }
`;

export const Nav = styled.nav`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  ${media.lessThan("910px")`
  width: 93%;
  `}
`;

export const List = styled.ul`
  display: flex;
  justify-content: flex-start;
  margin: 0 40px;
  li {
    margin: 0 15px;
    border-right: 2px solid #707070;
    &:nth-child(3) {
      border: 0;
      margin: 0 0 0 15px;
    }
  }
`;

export const LineA = styled.div`

  width: 40%;
  height: 1px;
  background: #707070;
  ${media.lessThan("910px")`
  width: 20%;
  `}
`;

export const LineB = styled.div`
  width: 10%;
  height: 1px;
  background: #707070;
`;
