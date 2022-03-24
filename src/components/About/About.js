import React, { useEffect, useRef } from "react";
import { gsap, Power2, Power0 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Container, Title, ProjectInfo, Content } from "./styles";

const About = () => {
  const titleRef = useRef();
  const imageRef = useRef();
  const infoRef = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(infoRef.current, {
      scrollTrigger: {
        trigger: ".info",
        toggleActions: "play none none none",
      },
      duration: 3,
      opacity: 1,
      y: 20,
      delay: 2,
    });
    gsap.to(titleRef.current, {
      delay: 3,
      scrollTrigger: {
        trigger: ".title",
        toggleActions: "play none none none",
      },
      opacity: 1,
      y: 15,
    });
    gsap.fromTo(
      imageRef.current,
      { scale: 0.9, opacity: 0.5, Power0 },
      {
        ease: Power2.easeOut,
        repeat: -1,
        duration: 5,
        scale: 1.2,
        yoyo: true,
        opacity: 1,
      }
    );
  });

  return (
    <Container id="about">
      <Title className="title" ref={titleRef}>
        <p>
          <span>
            <hr />
          </span>
          <h3>Sobre mim</h3>
        </p>
        <p>
          <h2>Um momento para me conhecer melhor</h2>{" "}
        </p>
      </Title>
      <Content className="info" ref={infoRef}>
        <ProjectInfo>
          <div>
            <span>
              <hr />
              Quem eu sou
            </span>
            <p>
              Sou apaixonada por tecnologia, jogos, criatividade e fazer sonhos
              se tornam realidade através da lógica da programação.
            </p>
          </div>
          <div>
            <span>
              <hr />
              Minhas habilidades
            </span>
            <p>
              Atualmente estou focada no desenvolvimento e manutenção de sites.
              Usando
              <b>
                Adobe XD, Figma, HTML, CSS, Flexbox, Grid, Javascript, Gsap,
                Bootstrap, Material-UI, Storybook, Context API, React JS
              </b>{" "}
              e<b>StyledComponents</b>.
            </p>
          </div>
          <a href="#contact">
            <button>Contacte-me!</button>
          </a>
        </ProjectInfo>
      </Content>
    </Container>
  );
};

export default About;
