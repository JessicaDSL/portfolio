import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from 'react-router-dom'

import Background from "../../assets/image/HomePage/backgroundHome.png";

import { Section, Image, Info } from "./styles";

const HomePage = () => {

  const navigate = useNavigate()

  const imageRef = useRef();
  const firstTextRef = useRef();
  const secTextRef = useRef();
  const thristTextRef = useRef();
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
    gsap.to(firstTextRef.current, {
      //width: 550,
      y: 5,
      duration: 1,
      opacity: 1,
    });
    gsap.to(secTextRef.current, {
     // x: 50,
     y: 10,
      delay: 1,
      duration: 1,
      opacity: 1,
    });
    gsap.to(thristTextRef.current, {
     //width: 550,
      delay: 2,
      y: 20,
      duration: 1,
      opacity: 1,
    });
    gsap.to(span.current, {
      y: 35,
      delay: 3,
      duration: 1,
      opacity: 1,
    });
    gsap.to(btn.current, {
      y: 10,
      delay: 3,
      duration: 1,
      opacity: 1,
    });
  });
  return (
    <Section>
      <Info>
        <p className="text" ref={firstTextRef}>
          Hello World,
        </p>
        <p ref={secTextRef}>
          {" "}
          I'm <strong>Jéssica Lima</strong>,
        </p>{" "}
        <p ref={thristTextRef}> a front-end developer! :)</p>
        <span ref={span}>Come and see my work. </span>
        <a href="#portfolio"><button ref={btn}>My Work!</button></a>
      </Info>
      <Image ref={imageRef}>
        <img src={Background} alt="logo" />
      </Image>
    </Section>
  );
};

export default HomePage;
