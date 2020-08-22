import React from "react";

// import { Container } from './styles';
import HeroSection from "../../components/Notify/HeroSection";
import FeatureSection from "../../components/Notify/FeatureSection";
import SubscribeSection from "../../components/Notify/SubscribeSection";
import SponserSection from "../../components/Notify/SponserSection";
import FooterSection from "../../components/Notify/FooterSection";

function NotifyPage() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <SubscribeSection />
      <SponserSection />
      <FooterSection />
    </>
  );
}

export default NotifyPage;
