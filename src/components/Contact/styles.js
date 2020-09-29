import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  height: 800px;
  margin: 20% 0 0 0;
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
  ${media.lessThan("600px")`
  height: 560px;
  `}
`;

export const Content = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
`;

export const LineA = styled.div`
  width: 20%;
  height: 0.5px;
  background: rgba(0, 0, 0, 0.2);
`;

export const LineB = styled.div`
  width: 50%;
  height: 0.5px;
  background: rgba(0, 0, 0, 0.2);
`;

export const Section = styled.section`
  display: flex;
  width: 80%;
  height: 700px;
  justify-content: center;
  align-items: center;
  ${media.lessThan("600px")`
  height: 300px;
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
  width: 50%;
  margin: 0 0 0 10%;
  img {
    width: 100%;
    height: auto;
    margin: 20px 0 0 0;
  }
  span {
    color: #de3163;
    font-weight: 600;
    margin: 0 0 6% 0;
  }
  img {
    border: 1px solid #707070;
  }

  ${media.lessThan("1200px")`
    display: none;
  `}
`;

export const Links = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  div {
    display: flex;
  }
  img {
    width: 190px;
    height: auto;
    margin: 0 4% 0 0;
  }
  img {
    ${media.lessThan("600px")`
    display: none;
    `}
  }
  p {
  }
  ${media.lessThan("1200px")`
  width: 90%;
  justify-content: center;
  align-items: center;
  `}
  ${media.lessThan("600px")`
  justify-content: center;
  align-items: center;
  `}
`;

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: column;

  ${media.lessThan("600px")`
  justify-content: space-between;
  min-height: 180px;
  `}
`;

export const List = styled.ul`
  display: flex;
  a {
    color: #707070;
  }
  ${media.lessThan("600px")`
  justify-content: space-between;
  align-items: center;
    `}
  svg {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
`;

export const ListItem = styled.li``;
