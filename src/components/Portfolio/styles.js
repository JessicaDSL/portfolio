import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
font-family: Lato;
  img {
    width: 400px;
    height: 380px;
  }
  
`;

export const Main = styled.main``;

export const Section = styled.section`
.image {
  display: flex;
}
  img {
    
  }
  ${media.lessThan("medium")`
    
  `}
`;

export const List = styled.ul``;

export const ListItem = styled.li``;

export const Aside = styled.aside`
display: flex;
`;

export const Image = styled.div`
  position: relative;
  overflow: hidden;
  width: 200px;
  height: 210px;
  border-radius: 4px;
  cursor: pointer;
  img {
    width: 100%;
    height: 210px;
    border-radius: 4px;
    transition: all 0.8s cubic-bezier(0.19, 1, 0.2, 1);
    &:hover {
      transform: scale(1.5);
    }
    span {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      opacity: 0;
      background: none repeat scroll 0 0 rgba(0, 0, 0, 0.5);
      border-radius: 2px;
      padding: 30px;
      color: white;
      font-size: 20px;
      font-family: Lato;
      &:hover {
        opacity: 1;
        box-shadow: inset 0 0 100px 50px rgba(0, 0, 0, 0.5);
      }
    }
  }
`;
