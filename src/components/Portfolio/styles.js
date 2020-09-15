import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  h1 {
    font-family: FiraCode;
    color: #707070;
    text-align: center;
    margin: 10% 0;
    font-size: 2.125rem;
  }
  img {
    width: 50%;
  }
`

export const Gallery = styled.div`
  width: 70%;
`


export const Content = styled.div`
  display: flex;
  margin: 8% 0;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  svg{
    color: #707070;
    font-size: 2rem;
  }
  
`

export const LineA = styled.div`
  width: 10%;
  height: 1px;
  background: #707070;
`