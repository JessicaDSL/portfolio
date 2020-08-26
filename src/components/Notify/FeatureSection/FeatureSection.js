import React from "react";

import { Container, List, ListItem } from "./styles";
import Settings from "../../../assets/image/notify/setting.png";
import Star from "../../../assets/image/notify/star.png";
import World from "../../../assets/image/notify/world.png";

const list = [
  {
    image: Settings,
    title: "Editable Theme",
    descripition:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla fringilla.",
  },
  {
    image: Star,
    title: "Flat Design",
    descripition:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla fringilla.",
  },
  {
    image: World,
    title: "Reach Your Audience ",
    descripition:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla fringilla.",
  },
];

const FeatureItem = ({ image, title, descripition }) => {
  return (
    <List>
      <ListItem>
        <img src={image} alt="icone" />
      </ListItem>
      <ListItem>
        <strong>{title}</strong>
        <p>{descripition}</p>
      </ListItem>
    </List>
  );
};

const FeatureSection = () => {
  return (
    <Container>
      {list.map((item, index) => (
        <FeatureItem
          key={index}
          image={item.image}
          title={item.title}
          descripition={item.descripition}
        />
      ))}
    </Container>
  );
};

export default FeatureSection;
