import React from "react";

import Bank from "../../../assets/image/carstore/products/bank.png";
import Headlight from "../../../assets/image/carstore/products/farol.png";
import Rim from "../../../assets/image/carstore/products/Rim.png";
import Wheel from "../../../assets/image/carstore/products/wheel.png";
import { Container, Content, LightGrayContent, DarkGrayContent  } from "./styles";

const ProductsSection = () => {
  return (
    <Container>
      <Content>
        <LightGrayContent>
          <div>
            <h1>Headlights</h1>
            <p>Headlights Projector, LED, Factory</p>
          </div>
          <img src={Headlight} alt="" />
        </LightGrayContent>

        <DarkGrayContent>
          <div>
            <h1>Headlights</h1>
            <p>Headlights Projector, LED, Factory</p>
          </div>
          <img src={Wheel} alt="" />
        </DarkGrayContent>

        <DarkGrayContent>
          <div>
            <h1>Headlights</h1>
            <p>Headlights Projector, LED, Factory</p>
          </div>
          <img src={Rim} alt="" />
        </DarkGrayContent>

        <LightGrayContent>
          <div>
            <h1>Headlights</h1>
            <p>Headlights Projector, LED, Factory</p>
          </div>
          <img src={Bank} alt="" />
        </LightGrayContent>
      </Content>
    </Container>
  );
};

export default ProductsSection;
