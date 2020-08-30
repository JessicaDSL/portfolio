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

  small {
    font-size: 16px;
    color: #2e2e2e;
    font-family: Raleway;
    margin: 0 0 30px 0;
    font-weight: bolder;
  }

  b {
    font-size: 24px;
    color: #010101;
    font-family: Raleway;
    text-align: center;
    margin: 20px 0 20px 0;
  }

  span {
    font-style: italic;
  }

  ${media.lessThan("1200px")`
  height:366px;
  justify-content: space-around;

  p{
    margin: 0 20px 5px 20px;
    line-height: 20px;
  }

  strong{
    margin: 0;
  }

  small{
    margin: 0;
  }
  `}
`;

export const Ul = styled.div`
  display: flex;
  justify-content: center;
  list-style: none;
  cursor: pointer;

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


export const Content = styled.div`
  display: flex;
  cursor: pointer;

  img {
    margin: 0 1px;
    opacity: 1;
    transition: 0.3s ease-in-out;
    
    &:hover {
      background-color: #2ecc71;
      opacity: 0.5;
    }
  }
  ${media.lessThan("1200px")`
    display: none;
  `}
`;

