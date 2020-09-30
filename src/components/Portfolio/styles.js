import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-family: FiraCode;
    color: #707070;
    text-align: center;
    margin: 20px 0;
    font-size: 1rem;
  }
  img {
    width: 50%;
  }
  ${media.lessThan("910px")`
  margin: 7% 0;
  img {
    width: 100%;
    margin: 3% 0;
  }
  `}
  
`;

export const Gallery = styled.div`
  width: 85%;
  ${media.lessThan("910px")`
    display: flex;
    flex-direction: column;
    width: 95%;
    justify-content: center;
    align-items: center;
    img {
   padding: 1.5px;
   border: .2px solid rgba(0, 0, 0, .1);
   background-color:#eee;
}
h1 {
  font-size: 1rem;
  margin: 0;
}
    .comming {
      display: none;
    }
  `}
  ${media.greaterThan("2101px")`
  h1 {
  font-size: 2.5rem;
  margin: 30px 0;
}
  `}
`;

export const Content = styled.div`
  display: flex;
  margin: 3% 0;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  svg {
    color: rgba(0, 0, 0, .2);
    font-size: 1.5rem;
  }
  ${media.lessThan("910px")`
    margin: 15% 0;
  `}
`;

export const LineA = styled.div`
  width: 10%;
  height: .5px;
  background: rgba(0, 0, 0, .2);
  ${media.lessThan("910px")`
    width: 20%;
  `}
`;
