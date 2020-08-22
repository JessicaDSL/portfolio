import styled from "styled-components";

export const Container = styled.div`
  height: 466px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    line-height: 30px;
    font-size: 18px;
    color: #848484;
    font-family: "Helvetica Neue", sans-serif;
    max-width: 860px;
    font-weight: lighter;
  }
  small {
    font-size: 16px;
    color: #2e2e2e;
    font-weight: bolder;
    font-family: Raleway;
  }
  strong {
    font-size: 24px;
    color: #000000;
    font-family: Raleway;
  }
  span {
    font-style: italic;
  }

  figure {
    cursor: pointer;

    img {
      margin: 0 3px 0 0;
      opacity: 1;
      transition: 0.3s ease-in-out;
      &:hover {
        opacity: 0.5;
        color: #2ecc71;
      }
    }
  }
`;

export const Content = styled.div`
  svg {
    margin: 0 10px 0 0;
    color: #d6d5d5;
    font-size: 20px;
    cursor: pointer;
    &:hover {
      color: #2ecc71;
    }
  }
`;
