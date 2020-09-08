import styled from "styled-components";
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  height: 250px;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    width: 83%;
    border-top: 2px solid rgb(77, 76, 76);
    margin: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 100px;
      margin: 30px 30px 0 0;
    }
  }
  ${media.lessThan('medium')`
  div{
    width: 90%;
    img{
      height: 80px;
      width: 100px;
    }
  }
  `}
`;
