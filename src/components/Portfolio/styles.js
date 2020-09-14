import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  font-family: Lato;
  display: flex;
  justify-content: center;
  h1 {
    font-family: Gadugi;
    font-size: 3rem;
    margin: 3rem 0 0 0;
  }
  hr {
    color: #de3163;
    background-color: #de3163;
    width: 250px;
    height: 6px;
    margin: 0px 0px 0px 0px;
    border-radius: 10px;
    border: 0;
  }
  h2 {
    font-size: 3rem;
    color: #080806;
  }
  a {
    font-size: 1.5rem;
    color: #080806;

    padding: 12px;
  }
  img {
    width: 520px;
    height: 480px;
    border-radius: 4px;
  }
  p {
    margin: 30px 0;
    text-align: center;
  }
`;

export const Main = styled.main`
  width: 90vw;
  background: #fcfbe3;
  margin: 20px 0 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;

export const Content = styled.div`
  width: 50%;
  height: 480px;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  ${media.lessThan("1140px")`
  width: 90%;
  justify-content: center;
  align-content: center;
  `}
`;

export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 40px 0;
  .image {
    display: flex;
  }
  
  ${media.lessThan("1140px")`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 95%;
      height: 60%;
    }
  `}
`;

export const List = styled.ul`
  margin: 0 0 0 15px;
  ${media.lessThan("1140px")`
    margin: 0 0 30px 0;
  
  
  `}
`;

export const ListItem = styled.li`
  small {
  }
  ${media.lessThan("560px")`
  font-size: 1rem;
background: blue;
  `}
`;

export const Aside = styled.aside`
  display: flex;
  margin: 0 0 0 15px;
  ${media.between("560px")`
  margin: 30px 0;
  `}
  ${media.lessThan("560px")`
  font-size: 1rem;

  `}
`;

export const Image = styled.div`
position: relative;
overflow: hidden;
  width: 190px;
  height: 190px;
  border-radius: 4px;
  cursor: pointer;
  color: white;
  margin: 0 5px;
  
  img {
    position: relative;
    width: 100%;
    border-radius: 2px;
    height: 190px;
    transition: all 1.6s cubic-bezier(.190, 1.000, .220, 1.000);
    filter: brightness(100%);
    &:hover {
      filter: brightness(10%);
    }
  }
  &:hover img{
    transform: scale(1.8);
  }
  .retina{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;    
    background: none repeat scroll 0 0 rgba(0, 0, 0, 0.5);    
    border-radius: 2px;
    text-align: center;
    padding: 30px;

    -webkit-transition:	 all .8s cubic-bezier(.190, 1.000, .220, 1.000);
    -moz-transition: all .8s cubic-bezier(.190, 1.000, .220, 1.000);
    -ms-transition: all .8s cubic-bezier(.190, 1.000, .220, 1.000);
    -o-transition: all .8s cubic-bezier(.190, 1.000, .220, 1.000);
    transition: all .8s cubic-bezier(.190, 1.000, .220, 1.000);
  }

  &:hover .retina {
    opacity: 1;
    box-shadow: inset 0 0 100px 50px rgba(0,0,0,.5);
  }

  
`;


export const Amam = styled.div`
transition: transform 1s, filter 1s ease-in-out;
`