import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  margin: 5% 0 1% 0;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  min-height: 200px;
  width: 100%;
  a {
    color: rgba(0, 0, 0, .3);
    margin: 5% 10% 0 0;
    ${media.lessThan("600px")`
      display: flex;
    `}
  }
  svg {
    width: auto;
    height: 25px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 50px;
  width: 100%;
  
`;

export const LineA = styled.div`
  width: 50%;
  height: .5px;
  background: rgba(0, 0, 0, .3);
`;

export const LineB = styled.div`
  width: 20%;
  height: .5px;
  background: rgba(0, 0, 0, .3);
`;
