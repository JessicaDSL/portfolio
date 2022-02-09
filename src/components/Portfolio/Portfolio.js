import React, { useRef, useEffect, useState, useContext } from "react";
import { gsap, Power2, Power0 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import {ProductContext} from '../../context/index'
import { projects } from "./mock";
import Project from '../Project'
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

//import Pokedex from "../../assets/image/Portfolio/pokedex.png";
import {
  Background,
  Container,
  Title,
  Image,
  Info,
  Arrows,
  ProjectInfo,
} from "./styles";

const Portfolio = () => {
  console.log(projects);
  //const [count, setCount] = useState(1);
  const titleRef = useRef();
  const imageRef = useRef();
  const infoRef = useRef();

  const {project, count, setCount} = useContext(ProductContext)

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(infoRef.current, {
      duration: 1,
      scrollTrigger: ".info",
      opacity: 1,
      y: 15,
    });
  });

  useEffect(() => {
    gsap.to(titleRef.current, {
      y: 15,
      delay: 0.5,
      scrollTrigger: ".title",
      opacity: 1,
     // width: 500,
    });
  });

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,

      { y: 0, opacity: 1, Power0 },
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

  useEffect(() => {}, [count]);
  if(count === 1) {
    console.log('oi pokedex')
  }

  return (
    <Background id="portfolio">
      <Title className="title" ref={titleRef}>
        <p>
          <span>
            <hr />
          </span>
          <h3>Work</h3>
        </p>
        <p>
          <h2>My Projects s2</h2>{" "}
        </p>
      </Title>

      <Container>
        <Info className="info" ref={infoRef}>
          <Arrows>
            <button
              onClick={() =>
                count <= 1 ? toast.error("Esse item já esta no carrinho!", {
                  theme: "dark",
                }) : setCount(count - 1)
              }
            >
              <ArrowLeftIcon />
            </button>{" "}
            <strong>
              {count <= 10
                ? `0${count}`
                : `${count }`}/
              {projects.length <= 10
                ? `0${projects.length}`
                : `${projects.length}`}
            </strong>{" "}
            <button
              onClick={() =>
                count >= projects.length
                  ? toast.error("Esse item já esta no carrinho!", {
                    theme: "dark",
                  })
                  : setCount(count + 1)
              }
            >
              <ArrowRightIcon />
            </button>
          </Arrows>
          {project.map((projectData) => (
            <Project projectData={projectData} />
          ))}
        </Info>
        <Image>
          {project.map((proj) => (
            <a href={proj.url}>
              <img
                src={proj.image}
                alt={`Foto do projeto ${proj.name}`}
                ref={imageRef}
                className="image"
              />
            </a>
          ))}
        </Image>
      </Container>
    </Background>
  );
};

export default Portfolio;
