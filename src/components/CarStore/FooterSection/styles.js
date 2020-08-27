import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  width: 1250px;
  height: 135px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  color: #ffffff;
  h1 {
    font-size: 15px;
    font-family: Lato;
  }
  p {
    color: #887979;
    font-size: smaller;
    font-family: Lato;
  }
  i {
    color: #ffffff;
    font-size: large;
    padding: 0 0 0 25px;
  }
  ${media.lessThan("500px")`
    width: 450px;
    flex-direction: column;
    justify-content: center;
    h1, p, i{
        margin: 10px 0 10px 0;
    }

`}
  ${media.between("501px", "1250px")`
width: 100%;
flex-direction: column;
    justify-content: center;
    h1, p, i{
        margin: 10px 0 10px 0;
    }
`}
`;

export const Content = styled.div`
  display: flex;
  ${media.lessThan("500px")`
    width: 450px;
    flex-direction: column;
    h1, p{
        text-align: center;
    }
`}
  ${media.between("501px", "1250px")`
    width: 100%;
    flex-direction: column;
    h1, p{
        text-align: center;
    }
    
`}
`;
