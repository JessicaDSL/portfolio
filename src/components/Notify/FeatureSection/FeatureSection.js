import React from "react";

import { Container, Content } from "./styles";
import Settings from "../../../assets/image/notify/setting.png";
import Star from "../../../assets/image/notify/star.png";
import World from "../../../assets/image/notify/world.png";

const FeatureSection = () => {
  return (
    <Container>
      <Content>
        <img src={Settings} alt="icone" />
        <strong>Editable Theme</strong>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          fringilla fringilla.
        </p>
      </Content>

      <Content>
        <img src={Star} alt="icone" />
        <strong>Flat Design</strong>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          fringilla fringilla.
        </p>
      </Content>

      <Content>
        <img src={World} alt="icone" />
        <strong>Reach Your Audience</strong>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          fringilla fringilla.
        </p>
      </Content>
    </Container>
  );
};

export default FeatureSection;
