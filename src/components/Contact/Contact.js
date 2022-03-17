import React, { useRef, useEffect } from "react";
import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

import { Container, Title, Email } from "./styles";

const Contact = () => {
  const titleRef = useRef();
  const imageRef = useRef();
  const infoRef = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(infoRef.current, {
      duration: 1,
      scrollTrigger: ".info",
      opacity: 1,
      y: 15,
      delay: 1,
    });
    gsap.to(titleRef.current, {
      delay: 1,
      scrollTrigger: ".title",
      opacity: 1,
    });
    gsap.fromTo(
      imageRef.current,
      { y: 0, opacity: 1 },
      {
        ease: Power2.easeOut,
        repeat: -1,
        y: "+=30px",
        duration: 5,
        yoyo: true,
        opacity: 1,
      }
    );
  });

  return (
    <Container id="contact">
      <Title className="title" ref={titleRef}>
        <p>
          <span>
            <hr />
          </span>
          <h3>Contato</h3>
        </p>
        <p>
          <h2>
            Gostou do meu trabalho e tem interesse em entrar em contato comigo?
          </h2>{" "}
        </p>
      </Title>
      <Email>
        <p>
          Entre em contato comigo pelas redes sociais, preenchendo o formulário
          de contato ou basta me enviar um e-mail:{" "}
          <span>jessikurt@gmail.com</span>
        </p>
      </Email>
      <ul>
        <li>
          <a
            href="https://www.github.com/jessicaDSL"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jessicadsl"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/jlkisuco"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon />
          </a>
        </li>
      </ul>
    </Container>
  );
};

export default Contact;
