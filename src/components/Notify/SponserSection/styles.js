import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 466px;

  p {
    line-height: 30px;
    font-size: 18px;
    color: #848484;
    font-family: "Helvetica Neue", sans-serif;
    text-align: center;
    margin: 0 auto;
    max-width: 860px;
    font-weight: lighter;
    margin: 0 0 30px 0;
  }

  h3 {
    font-size: 16px;
    color: #2e2e2e;
    font-family: Raleway;
    margin: 0 0 30px 0;
  }

  h2 {
    font-size: 24px;
    color: #000000;
    font-family: Raleway;
    text-align: center;
    margin: 0 0 30px 0;
  }

  span {
    font-style: italic;
  }

  img {
    display: flex;
    margin: 0 0 15px 0;
  }

  ${media.lessThan("1200px")`
  height:366px;

  p{
    text-align: center;
    margin: 0 20px 5px 20px;
    line-height: 20px;
  }

  h2{
    margin: 0px 20px 10px 20px;
  }

  h3{
    margin: 10px 0 0 0;
  }
  `}
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;

  svg {
    color: #d6d5d5;
    font-size: 20px;
    margin: 0 10px 0 0;
    &:hover {
      color: #2ecc71;
    }
    ${media.lessThan("500px")`
      margin: 20px 10px 0 0;
    `}
  }
`;
