import styled from "styled-components";
import media from "styled-media-query";


export const Container = styled.div`
  min-height: 600px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #707070;
  font-family: FiraCodeRetina;
  h1 {
    color: #de3163;
    font-size: 2.5rem;
  }
  h3 {
    margin: 0 0 7% 0;
    font-size: 1.5rem;
    margin: 0 0 10% 0;
  }
  p{
    max-width: 90%;
    margin: 7% 0;
  }
  img {
    width: 100%;
    height: auto;
    ${media.lessThan("1080px")`
      margin: 15% 0;
    `}
  }
  ${media.lessThan("1080px")`
  justify-content: center;
    `}
`;

export const Content = styled.div`
display: flex;
width: 85%;
${media.lessThan("1080px")`
      margin: 15% 0;
    `}
${media.lessThan("1080px")`
      flex-direction: column;
      text-align: center;
      width: 90%;
      p{
        max-width: 100%;
      }
    `}
`;
