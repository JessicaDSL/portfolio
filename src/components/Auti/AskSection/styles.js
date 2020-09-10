import styled from "styled-components";
import media from 'styled-media-query';

export const Container = styled.div`
  font-family: Lato;
  color: rgb(72, 72, 72);
  hr {
    border-bottom: 5px solid #333232;
    margin-top: 0.6rem;
    width: 5rem;
    border-width: 0.25rem;
    border-style: solid;
    border-color: rgb(90, 89, 89);
    border-image: initial;
    height: 3px;
    margin: 1% 8%;
  }
  h2 {
    font-size: 2.3rem;
    margin: 0 8%;

    span {
      font-size: 1.8rem;
    }
  }
  ${media.lessThan('large')`
    hr, h2{
      margin: 0;
    }
  `}
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
  ${media.lessThan('medium')`
  margin: 20px 0 0 0;
    width: 100%;
  `}
`;

export const ListItem = styled.li`
  background-color: rgb(218, 216, 216);
  width: 1040px;
  margin: 10px 0;
  padding: 20px;
  border-radius: 10px;
  color: gray;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  ${media.lessThan('medium')`
    width: 100%;
  `}
`;
