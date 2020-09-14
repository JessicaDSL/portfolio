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
  }
  h3 {
    margin: 0 0 7% 0;
  }
  p{
    max-width: 90%;
  }
  img {
    width: 100%;
    height: auto;
    ${media.lessThan("1080px")`
      margin: 15% 0;
    `}
  }
`;

export const Content = styled.div`
display: flex;
width: 85%;
${media.lessThan("1080px")`
      flex-direction: column;
    `}
`;
