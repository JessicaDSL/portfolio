import styled from "styled-components";
import media from 'styled-media-query';


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-family: Gadugi;
    font-size: 3rem;
    margin: 1rem 0 0 0;
  }
  hr {
    color: #de3163;
    background-color: #de3163;
    width: 220px;
    height: 6px;
    margin: 0px 0px 0px 0px;
    border-radius: 10px;
    border: 0;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fcfbe3;
  height: 72vh;
  width: 80vw;
  border-radius: 10px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
  font-family: Lato;
  margin: 60px 0 0 0;

  a {
    color: #fcfbe3;
    font-size: 1.3rem;
    background: #080806;
    padding: 10px 25px;
    border-radius: 10px;
    transition: 0.2s all ease-out;
    &:hover {
      color: #de3163;
      background: rgba(0, 0, 0, 0.9);
      border: 2px solid #de3163;
    }
  }

  p {
    padding: 7px 0px 8px 30px;
  }
  span {
    svg {
      width: 25px;
      height: 25px;
    }
  }
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80vw;
  ${media.lessThan("medium")`
    flex-direction: column;
    img{ 
      margin: 30px 0;
      width: 200px;
    }
    a{
      padding: 10px 10px;
    }
  `}
`;

export const Aside = styled.aside`
  margin: 40px 0 0 0;
  h3 {
    font-size: 1rem;
  }
  ${media.lessThan("medium")`
    display: none;
  `}
`

export const Links = styled.div`
  img{ 
    margin: 35px 0;
  }
`

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-self: center;
`;

export const ListItem = styled.li`
  margin: 5px;
  border-radius: 10px;
`;


