import React from 'react';

import ArrowLeft from '../../components/ArrowLeft';
import MenuNav from '../../components/Auti/MenuNav';
import HeaderSection from '../../components/Auti/HeaderSection';
import DonationSection from '../../components/Auti/DonationSection';
import ArticleSection from '../../components/Auti/ArticleSection';
import SubscribeSection from '../../components/Auti/SubscribeSection';
import AskSection from '../../components/Auti/AskSection';
import FooterSection from '../../components/Auti/FooterSection';
import { Container } from './styles';

const AutiPage = () => {
  return(
    <Container>
      <ArrowLeft />
      <MenuNav />
      <HeaderSection />
      <DonationSection />
      <ArticleSection />
      <SubscribeSection />
      <AskSection />
      <FooterSection />
    </Container>
  );
}

export default AutiPage;