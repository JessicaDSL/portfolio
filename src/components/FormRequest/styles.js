import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  form {
    display: flex;
    flex-direction: column;
    width: 87%;
    margin: 1.2rem 0 3rem;
    input {
      background: #141628;
      border: 1px solid #d1d5dc;
      height: 2.8rem;
      border-radius: 4px;
      margin: 0.5rem 0 1.8rem 0;
      color: #fff;
      padding: 0 1rem;
      font-size: medium;
      letter-spacing: 0.8px;
    }
    textarea {
      background: #141628;
      border: 1px solid #d1d5dc;
      color: #fff;
      border-radius: 4px;
      margin: 0.5rem 0;
      padding: 1rem;
      font-size: medium;
    }
    button {
      margin: 2rem 0 4rem 0;
      background: #fd4370;
      border: none;
      color: #fff;
      font-weight: 600;
      letter-spacing: 0.2px;
      height: 3rem;
      width: 12rem;
      border-radius: 4px;
      font-size: small;
      &:hover {
        background: #fb2e68;
        position: relative;
        top: -2px;
        transition: 0.7s ease;
      }
    }
    &::placeholder {
      font-size: medium;
    }
    ${media.between("medium", "large")`
      width: 80%;
      margin: 1.8rem 0 0 0;
      input{
        width: 60%;
      }
      textarea {
        width: 60%;
      }
      button {
        height: 3rem;
          width: 14rem;
          font-size: large;
      }
    `}
    ${media.greaterThan("large")`
    width: 80%;
    margin: 2.2rem 0 3rem 0;
    p{
      font-size: x-large;
    }
    textarea {
      width: 50%;
      font-size: x-large;
      letter-spacing: 1.1px;
    }
    input {
      width: 50%;
      height: 3.2rem;
      margin: 0.5rem 0 1.4rem 0;
      font-size: x-large;
      letter-spacing: 1.1px;
    }
    button {
      margin: 1.4rem 0 5rem 0;
      height: 3rem;
      width: 14rem;
      font-size: large;
    }
  `}
`;
