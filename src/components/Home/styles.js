import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  min-height: 480px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #707070;
  font-family: FiraCodeRetina;
  h1 {
    color: #ff0099;
    font-size: 2.5rem;
    padding: 60px 0 0 0;
  }
  h3 {
    margin: 0 0 50px 0;
    font-size: 1.5rem;
  }
  p {
    font-size: 1.5rem;
  }
  img {
    width: 100%;
    height: auto;
  }
  ${media.lessThan("910px")`
  justify-content: center;
  min-height: 200px;
  img {
    display: none;
  }
`}
`;

export const Content = styled.div`
  display: flex;
  width: 90%;
  ${media.lessThan("910px")`
  text-align: center;
  width: 90%;
  
`}
`;

export const Image = styled.div`
  /*aqui esta perfeito para todos os tamanhos*/
  width: 45%;
  height: auto;
  ${media.lessThan("910px")`
    display: none;
  `}
  ${media.between("910px", "1400px")`
      width: 50%;
  `}
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 55%;
  p {
    max-width: 85%;
    font-size: 0.9rem;
    margin: 10px 0;
  }
  ${media.lessThan("910px")`
    width: 100%;
    p{
      max-width: 100%;
    }
    h1 {
      padding: 0;
    }
    h3 {
      margin: 0 0 25px 0;
    }
  `}
  ${media.between("910px", "1100px")`
    width: 50%;
    h1 {
      padding: 40px 0 0 0;
      font-size: 2.3rem;
    }
    h3 {
      font-size: 1.2rem;
      margin: 0 0 20px 0;
    }
    p{
      max-width: 80%;
      font-size: .6rem;
    }
  `}
  ${media.between("1100px", "1400px")`
    width: 50%;
    h1 {
      padding: 40px 0 0 0;
      font-size: 3.5rem;
    }
    h3 {
      font-size: 2rem;
      margin: 0 0 20px 0;
    }
    p{
      max-width: 80%;
      font-size: .7rem;
    }
  `}

  ${media.greaterThan("2101px")`
    h1 {
      font-size: 6rem;
      margin: 60px 0 0 0;
    }
    h3 {
      font-size: 3.5rem;
    }
    p {
      font-size: 1.6rem;
      padding: 10px 0;
    }
  `}
`;
