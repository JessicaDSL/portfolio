import styled from "styled-components";
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  ${media.lessThan('medium')`
    flex-direction: column;
    align-items: flex-start;
  `}

  div {
    margin: 0 0 0 120px;
    display: flex;
    ${media.lessThan('medium')`
    margin: 20px 0 0 10px;
  `}
  }

  h2 {
    font-family: Lato;
    font-weight: normal;
    font-size: 1rem;
    padding: 0 16px;
    color: rgb(87, 85, 85);

    &:last-child {
      margin: 0 120px 0 0;
    }
  }

  img {
    height: 70px;
    margin: 20px 30px 0 0;
    ${media.lessThan('medium')`
    height: 50px;
    margin: 0;

  `}
  }
`;

export const Menu = styled.menu`
  display: flex;
  ${media.lessThan('medium')`
    margin: 20px 0;
    padding: 0;
  `}
`;
