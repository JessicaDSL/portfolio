import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Section, Image, Info, Container } from "./styles";

const HomePage = () => {

  const imageRef = useRef();
  const span = useRef();
  const btn = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(imageRef.current, {
      y: 30,
      duration: 3,
      opacity: 1,
    });
  });

  useEffect(() => {
    gsap.to(span.current, {
      y: 20,
      delay: 5,
      duration: 1,
      opacity: 1,
    });
    gsap.to(btn.current, {
      y: 0,
      delay: 6,
      duration: 1,
      opacity: 1,
    });
  });


  return (
    <Section id="home">
      <Container>
        <Info>
          <p>
            Hello World,
          </p>
          <p>
            I'm <strong>Jéssica Lima</strong>,
          </p>
          <p> a front-end developer! :)</p>
          <span ref={span}>Come and see my work. </span>
          <a href="#portfolio">
            <button ref={btn}>My Work!</button>
          </a>
        </Info>
        <Image ref={imageRef}></Image>
      </Container>
    </Section>
  );
};

export default HomePage;
