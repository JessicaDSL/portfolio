import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 200px;
  width: 100%;
  a {
    border: white;
    color: rgba(0, 0, 0, 0.3);
    position: relative;
    left: 38%;
  }
  svg {
    width: 80%;
    height: 25px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100px;
  width: 100%;
`;

export const LineA = styled.div`
  width: 65%;
  height: 0.5px;
  background: rgba(0, 0, 0, 0.2);
  margin: 5% 0;
`;

export const LineB = styled.div`
  width: 15%;
  height: 0.5px;
  background: rgba(0, 0, 0, 0.2);
  margin: 5% 0;
`;
