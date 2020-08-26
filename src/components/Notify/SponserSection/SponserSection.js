import React from "react";

import { Container, Content } from "./styles";
import SponserList from "../SponserList";
import {
  GrPinterest,
  GrFacebook,
  GrTwitter,
  GrGoogle,
  GrLinkedin,
  GrYoutube,
} from "react-icons/gr";

const SponserSection = () => {
  return (
    <Container>
      
      <p>
        <span>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          interdum velit vitae nulla molestie eu commodo nulla dapib us. Donec
          id sollicitudin urna. Integer at dui ac leo fermentum varius eleifend
          ut.”
        </span>
      </p>

      <h3>Jane Hunt</h3>

      <ul>
        <li>
          <SponserList />
        </li>
      </ul>

      <h2>Say Hi & Get in Touch</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit suspendisse.
      </p>

      <Content>
        <GrPinterest />
        <GrFacebook />
        <GrTwitter />
        <GrGoogle />
        <GrLinkedin />
        <GrYoutube />
      </Content>

    </Container>
  );
};

export default SponserSection;
