import React from "react";

//import { IoLogoLinkedin, IoLogoInstagram, IoLogoGithub, IoMdMail } from "react-icons/io";
import ArticleSection from '../../components/CarStore/ArticleSection';
import SubscribeSection from '../../components/CarStore/SubscribeSection';
import AdressSection from '../../components/CarStore/AdressSection';
import FooterSection from '../../components/CarStore/FooterSection';


import { Container } from "./styles";
 

const CarStorePage = () => {
  return (
    <Container>
      <ArticleSection />
      <SubscribeSection />
      <AdressSection />
      <hr />
      <FooterSection />
    </Container>
  );
};

export default CarStorePage;
