import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Main,
  Section,
  List,
  Aside,
  Image,
  Content,
} from "./styles";
import Notify from "../../assets/image/layout/notify.png";
import CarStore from "../../assets/image/layout/carstore.png";
import Donaty from "../../assets/image/layout/donaty.png";

const Portfolio = () => {
  const [img, setImg] = useState(CarStore);
  const [name, setName] = useState("CarStore");
  const [layout, setLayout] = useState("/carstore");
  const [gitHub, setGitHub] = useState(
    "https://github.com/JessicaDSL/portfolio/tree/master/src/pages/CarStorePage"
  );

  function handleClick01() {
    setName("Notify");
    setImg(Notify);
    setLayout("/notify");
    setGitHub(
      "https://github.com/JessicaDSL/portfolio/tree/master/src/pages/NotifyPage"
    );
  }

  function handleClick02() {
    setName("CarStore");
    setImg(CarStore);
    setLayout("/carstore");
    setGitHub(
      "https://github.com/JessicaDSL/portfolio/tree/master/src/pages/CarStorePage"
    );
  }

  function handleClick03() {
    setName("Donaty");
    setImg(Donaty);
    setLayout("/auti");
    setGitHub(
      "https://github.com/JessicaDSL/portfolio/tree/master/src/pages/AutiPage"
    );
  }

  return (
    <Container>
      <Main>
        <div>
          <h1>PORTFOLIO</h1>
          <hr />
        </div>
        <p>
          Em meu tempo livre, gosto de praticar minhas habilidades de React e
          CSS replicando layouts.
          <br />
          Aqui segue alguns dos meus trabalhos e seus respectivos links de
          funcionamento
        </p>
        <Section>
          <img src={img} />
          <Content>
            <List>
              <li>
                <h2>{name}</h2>
              </li>
              <li>
                <a href={gitHub} target="blank">
                  <small>• Código no GitHub</small>
                </a>
              </li>
              <li>
                <Link to={layout} target="blank">
                  <small>• Acessar o Layout</small>
                </Link>
              </li>
            </List>
            <Aside>
              <Image onClick={handleClick02}>
                <img src={CarStore} alt="" className="image" />
                <div className="retina">
                  <span>CarStore</span>
                </div>
              </Image>
              <Image onClick={handleClick01}>
                <img src={Notify} alt="" />
                <div className="retina">
                  <span>Notify</span>
                </div>
              </Image>
              <Image onClick={handleClick03}>
                <img src={Donaty} alt="" />
                <div className="retina">
                  <span>Donaty</span>
                </div>
              </Image>
            </Aside>
          </Content>
        </Section>
      </Main>
    </Container>
  );
};

export default Portfolio;
