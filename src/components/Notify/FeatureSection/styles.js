import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  min-height: 335px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;

  ${media.lessThan("768px")`
   flex-wrap: wrap;
   display: flex;
   justify-content: center;
  `}
`;

export const ListItem = styled.li`
  text-align: center;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  margin: 10px 30px;

  p {
    max-width: 400px;
    color: #848484;
    font-family: "Helvetica Neue", sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: lighter;
  }

  h1 {
    color: #222222;
    font-family: Raleway;
    font-size: medium;
    margin: 20px 0 0 0;
    font-size: large;
  }

  img {
    margin: 0 auto;
    width: 110px;
    height: 110px;
  }
`;
