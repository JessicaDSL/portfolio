import styled from 'styled-components';

export const Container = styled.div`
  font-family: Lato;
  width: 100%;
  
`;

export const Section = styled.section`
min-height: 470px;
display: flex;
justify-content: center;
align-items: center;
img {
    justify-content: flex-end;
  margin: 0 50px 0 0;
}
p {
    font-size: 16px;
    padding: 20px 0 0 0;
    color: rgb(128, 128, 128);
    width: 40%;
  }
  button {
    background-color: rgb(218, 16, 128);
    color: #ffffff;
    border-bottom-color: rgb(255, 255, 255);
    border: 0;
    padding: 16px 56px;
    border-radius: 5px;
    font-size: 16px;
    margin: 20px 0 0 0;
  }
`;

export const Content = styled.div`
  height: 205px;
  background-color: rgb(14, 162, 211);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 0 6% 0;
  p {
    max-width: 900px;
    text-align: center;
    color: #ffffff;
    display: flex;
    font-size: 16px;
    font-family: Lato;
  }
`;