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
          <h3>About me</h3>
        </p>
        <p>
          <h2>One minute to get to know me better</h2>{" "}
        </p>
      </Title>
      <Content className="info" ref={infoRef}>
        <ProjectInfo>
          <div>
            <span>
              <hr />
              Who am I
            </span>
            <p>
              I am passionate about technology, games, creativity, and making
              dreams come true through the logic of programming.
            </p>
          </div>
          <div>
            <span>
              <hr />
              My Skills
            </span>
            <p>
              I am currently focused on website development and maintenance.
              Using{" "}
              <b>
                Adobe Photoshop, HTML5, CSS3, Flexbox, Grid, Javascript, Gsap,
                Bootstrap, Material-UI, Storybook, Context API, ReactJS
              </b>{" "}
              and <b>StyledComponents</b>.
            </p>
          </div>
          <a href="#contact">
            <button>Contact!</button>
          </a>
        </ProjectInfo>
      </Content>
    </Container>
  );
};

export default About;
