import styled from "styled-components";

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
  }
`;

export const Content = styled.div`
display: flex;
width: 85%;
`;
