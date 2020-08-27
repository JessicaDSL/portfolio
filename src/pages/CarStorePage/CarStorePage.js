import React from "react";

//import { IoLogoLinkedin, IoLogoInstagram, IoLogoGithub, IoMdMail } from "react-icons/io";

import SubscribeSection from '../../components/CarStore/SubscribeSection';
import AdressSection from '../../components/CarStore/AdressSection';
import FooterSection from '../../components/CarStore/FooterSection';


import { Container } from "./styles";
 

const ContactPage = () => {
  return (
    <Container>
      <SubscribeSection />
      <AdressSection />
      <hr />
      <FooterSection />
    </Container>
  );
};

export default ContactPage;
