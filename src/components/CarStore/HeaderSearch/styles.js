import styled from 'styled-components';

export const Container = styled.div`
  height: 35px;
  color: #ff3448;
  font-family: Lato;
  font-size: small;
  display: flex;
  background-color: #212121;
  align-items: center;
  justify-content: flex-end;

  svg{
    color: #ffffff;
    margin: 0 5px 0 0;
  }

  span {
    
    svg {
      color: #ff3448;
      width: 15px;
      height: 15px;
    }
  }

div {
  height: 26px;
  width: 2px;
  background: #585858;
  margin: 0 10px 0 0;
}
`;

export const List = styled.ul`
  display: flex;
`;

export const ListItem = styled.li`
  a {
    color: #ff3448;
    margin: 0 25px 0 0;
  }
`;

export const Line = styled.div`
  width: 90%;
    height: 3px;
    background: #595959;
`;

export const Content = styled.div``
