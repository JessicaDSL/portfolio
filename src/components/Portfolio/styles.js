import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-family: FiraCode;
    color: #707070;
    text-align: center;
    margin: 5% 0;
    font-size: 2.125rem;
  }
  img {
    width: 50%;
  }
  ${media.lessThan("960px")`
  img {
    width: 100%;
    margin: 3% 0;
  }
  `}
`;

export const Gallery = styled.div`
  width: 80%;
  ${media.lessThan("960px")`
    display: flex;
    flex-direction: column;
    width: 90%;
    justify-content: center;
    align-items: center;
  `}
`;

export const Content = styled.div`
  display: flex;
  margin: 2% 0;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  svg {
    color: rgba(0, 0, 0, .2);
    font-size: 2rem;
  }
`;

export const LineA = styled.div`
  width: 5%;
  height: .5px;
  background: rgba(0, 0, 0, .2);
`;
