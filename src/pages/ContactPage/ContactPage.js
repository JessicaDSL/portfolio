import React from "react";

//import { IoLogoLinkedin, IoLogoInstagram, IoLogoGithub, IoMdMail } from "react-icons/io";


//import Photo from "../../assets/image/foto-contact-dois.png";
//import Map from "../../assets/image/map.png";
import { Container, Content } from "./styles";
import Hero from "../../components/Hero";


const ContactPage = () => {
  return (
    <Container>
      <Hero />
      <Content>
        <h1>Contact</h1>
      </Content>
    </Container>
  );
};

export default ContactPage;
