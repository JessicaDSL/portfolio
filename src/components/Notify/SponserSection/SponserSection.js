import React from "react";
import {
  GrPinterest,
  GrFacebook,
  GrTwitter,
  GrGoogle,
  GrLinkedin,
  GrYoutube,
} from "react-icons/gr";

import { Container, Content, Ul } from "./styles";
import { list } from "./content";



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

      <small>Jane Hunt</small>

      <Content>
        {list.map((item, index) => (
          <img src={item.image} alt="icone" key={index} image={item.image} />
        ))}
      </Content>

      <strong>Say Hi & Get in Touch</strong>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit suspendisse.
      </p>

      <Ul>
        <li>
          <a href="#">
            <GrPinterest />
          </a>
        </li>
        <li>
          <a href="#">
            <GrFacebook />
          </a>
        </li>
        <li>
          <a href="#">
            <GrTwitter />
          </a>
        </li>
        <li>
          <a href="#">
            <GrGoogle />
          </a>
        </li>
        <li>
          <a href="#">
            <GrLinkedin />
          </a>
        </li>
        <li>
          <a href="#">
            <GrYoutube />
          </a>
        </li>
      </Ul>
    </Container>
  );
};

export default SponserSection;
