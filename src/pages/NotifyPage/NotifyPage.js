import React from "react";

import { Container } from './styles';
import ArrowLeft from '../../components/ArrowLeft'
import HeroSection from "../../components/Notify/HeroSection";
import FeatureSection from "../../components/Notify/FeatureSection";
import SubscribeSection from "../../components/Notify/SubscribeSection";
import SponserSection from "../../components/Notify/SponserSection";
import FooterSection from "../../components/Notify/FooterSection";

function NotifyPage() {
  return (
    <Container>
      <ArrowLeft />
      <HeroSection />
      <FeatureSection />
      <SubscribeSection />
      <SponserSection />
      <FooterSection />
    </Container>
  );
}

export default NotifyPage;
