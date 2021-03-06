import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  height: 427px;
  display: flex;
  background-color: #e3e3e3;
  justify-content: space-around;
  align-items: center;
  font-family: "Helvetica Neue", sans-serif;
`;

export const Content = styled.div`
  h2 {
    color: #222222;
    font-family: Raleway;
    font-size: 20px;
    max-width: 550px;
  }

  p {
    color: #848484;
    font-size: 16px;
    line-height: 24px;
    text-align: left;
    max-width: 550px;
    margin: 45px 0;
  }

  input {
    border-radius: 10px 0 0 10px;
    width: 305px;
    border: 1px solid #c8c8c8;
    color: #848484;
    font-size: 18px;
    padding: 11px;
  }

  button {
    cursor: pointer;
    border-radius: 0 10px 10px 0;
    border: 0;
    background-color: #2ecc71;
    color: #ffffff;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 22px;
    padding: 8px 20px 11px 20px;
  }

  ${media.lessThan("500px")`
    justify-content: center;
    flex-wrap: nowrap;
    margin: 10px;
    p {
    color: #848484;
    font-family: "Helvetica Neue", sans-serif;
    font-size: 14px;
    line-height: 14px;
    max-width: 550px;
    text-align: left;
    margin: 30px 10px;
    }
    form {
      display: flex;
    }
    input {
      border-radius: 10px 0 0 10px;
      border: 1px solid #c8c8c8;
      color: #848484;
      font-size: 18px;
      width: 190px;
      margin: 0 0 0 10px;
    }
    h2 {
      margin: 0 10px;
    }
    button {
      margin: 0 10px 0 0;
    }
    `}
`;

export const Iframe = styled.iframe`
  ${media.lessThan("1020px")`
  display: none;
  `}
`;
