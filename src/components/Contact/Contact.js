import React, { useRef, useEffect } from "react";
import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FormRequest from "../FormRequest";

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
          <h3>Connect</h3>
        </p>
        <p>
          <h2>Did you like my work and are interested in contacting me?</h2>{" "}
        </p>
      </Title>
      <Email>
        <p>
          Contact me through social media, filling out the contact form, or
          simply send me an email: <span>jessikurt@gmail.com</span>
        </p>
      </Email>
      <ul>
        <li>
          <GitHubIcon />
        </li>
        <li>
          <LinkedInIcon />
        </li>
        <li>
          <TwitterIcon />
        </li>
      </ul>
      <FormRequest />
    </Container>
  );
};

export default Contact;
