import styled from "styled-components";
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #707070;
  font-family: FiraCodeRetina;
  h1 {
    font-family: FiraCode;
    font-size: 2.125rem;
    margin: 0 0 15% 0;
  }
  h3 {
    font-family: FiraCodeRetina;
    color: #de3163;
    text-align: right;
    margin: 0 20%;
  }
  svg {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8% 0;
  width: 100%;
`;

export const LineA = styled.div`
  width: 20%;
  height: .5px;
  background: rgba(0, 0, 0, .2);
`;

export const LineB = styled.div`
  width: 50%;
  height: .5px;
  background: rgba(0, 0, 0, .2);
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  width: 80%;
  ${media.lessThan("600px")`
  justify-content: center;
  align-items: center;
  margin: 0;
  text-align: center;
  span {
    color: #de3163;
  }
    `}
`;

export const Aside = styled.aside`

  img {
    width: 80%;
    margin: 5% 0 5% 20%;
    border: 1px solid #707070;
  }
  h3 {
  }
  
  ${media.lessThan("1060px")`
    display: none;
  `}
`;

export const Links = styled.div`
  display: flex;
  margin: 10% 0;
  align-content: space-between;
  img {
    display: block;
    width: 180px;
    height: 200px;
    margin: 0 5% 0 0;
    ${media.lessThan("600px")`
    display: none;
    `}
  }
  p {
    margin: 0 0 2% 0;
  }

`;



export const List = styled.ul`
  display: flex;
  a {
    color: #707070;
  }
  ${media.lessThan("600px")`
  justify-content: center;
  align-items: center;
  margin: 0;
  text-align: center;
    `}
    svg {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
`;

export const ListItem = styled.li`
  margin: 0 6% 0 0;
`;
