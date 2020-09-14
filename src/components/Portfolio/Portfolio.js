import React from "react";
import { Link } from "react-router-dom";
import { BsHeart } from "react-icons/bs";

import { Container, Content, LineA, Gallery } from "./styles";
import Notify from "../../assets/image/portfolio/notify.png";
import CarStore from "../../assets/image/portfolio/carstore.png";
import Donaty from "../../assets/image/portfolio/donaty.png";
import Comming from "../../assets/image/portfolio/commingsoon.png";

const Portfolio = () => {
  return (
    <Container id="portfolio">
      <Content>
        <LineA></LineA>
        <BsHeart />
        <LineA />
      </Content>

      <Gallery>
        <h1>Portfolio</h1>
          <Link to={"/notify"} target="blank">
            <img src={Notify} alt="" />
          </Link>
          <Link to={"/carstore"} target="blank">
            <img src={CarStore} alt="" />
          </Link>
          <Link to={"/donaty"} target="blank">
            <img src={Donaty} alt="" />
          </Link>
          <img src={Comming} alt="" />
      </Gallery>
    </Container>
  );
};

export default Portfolio;
