import React from 'react';

import { Container, LineA, LineB, Content } from './styles';
import { FaArrowCircleUp } from 'react-icons/fa'

const FooterSection = () => {
  return(
    <Container>
      <Content>
      <LineA></LineA>
      <a href="#header"><FaArrowCircleUp /></a>
      </Content>
      
      <LineB></LineB>
    </Container>
  );
}

export default FooterSection;