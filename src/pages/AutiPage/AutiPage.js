import React from 'react';


import SubscribeSection from '../../components/Auti/SubscribeSection'
import AskSection from '../../components/Auti/AskSection';
import FooterSection from '../../components/Auti/FooterSection';
import { Container } from './styles';

const AutiPage = () => {
  return(
    <Container>
      <SubscribeSection />
      <AskSection />
      <FooterSection />
    </Container>
  );
}

export default AutiPage;