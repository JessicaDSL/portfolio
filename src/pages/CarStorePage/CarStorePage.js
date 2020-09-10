import React from "react";

import HeaderSection from '../../components/CarStore/HeaderSection';
import ProductsSection from '../../components/CarStore/ProductsSection';
import FeatureSection from '../../components/CarStore/FeatureSection';
import ArticleSection from '../../components/CarStore/ArticleSection';
import SubscribeSection from '../../components/CarStore/SubscribeSection';
import AdressSection from '../../components/CarStore/AdressSection';
import FooterSection from '../../components/CarStore/FooterSection';


import { Container, Hr } from "./styles";
 

const CarStorePage = () => {
  return (
    <Container>
      <HeaderSection />
      <ProductsSection />
      <FeatureSection />
      <ArticleSection />
      <SubscribeSection />
      <Hr />
      <AdressSection />
      <Hr />
      <FooterSection />
    </Container>
  );
};

export default CarStorePage;
