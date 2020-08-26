import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  ${media.lessThan("1200px")`
    display: none;
  `}
`;
