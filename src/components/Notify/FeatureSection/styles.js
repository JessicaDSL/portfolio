import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  min-height: 335px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;

  ${media.lessThan("medium")`
   flex-wrap: wrap;
  `}
`;

export const Content = styled.div`
  text-align: center;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  margin: 10px 30px;

  strong {
    color: #222222;
    font-family: Raleway;
    font-size: medium;
    margin: 20px 0 0 0;
    font-size: large;
  }

  p {
    color: #848484;
    font-family: "Helvetica Neue", sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: lighter;
    max-width: 400px;
  }
  img {
    width: 110px;
    height: 110px;
    margin: 0 auto;
    padding: 0 0 10px 0;
  }
`;
