import React from "react";

import One from '../../../assets/image/one.png';

import { Container, Content } from "./styles";
import {
  GrPinterest,
  GrFacebook,
  GrTwitter,
  GrGoogle,
  GrLinkedin,
  GrYoutube,
} from "react-icons/gr";


import Two from '../../../assets/image/two.png';
import Three from '../../../assets/image/three.png';
import Four from '../../../assets/image/four.png';
import Five from '../../../assets/image/five.png';
import Six from '../../../assets/image/six.png';
import Seven from '../../../assets/image/seven.png';
import Eight from '../../../assets/image/eight.png';
import Nine from '../../../assets/image/nine.png';
import Ten from '../../../assets/image/ten.png';
import Eleven from '../../../assets/image/eleven.png';
import Twelve from '../../../assets/image/twelve.png';
import Thriteen from '../../../assets/image/thirteen.png';
import Fourteen from '../../../assets/image/fourteen.png';
import Fiveteen from '../../../assets/image/fiveteen.png';
import Sixteen from '../../../assets/image/sixteen.png';
import Seventeen from '../../../assets/image/seventeen.png';
import Eighteen from '../../../assets/image/eighteen.png';
import Nineteen from '../../../assets/image/nineteen.png';
import Twenty from '../../../assets/image/twenty.png';
import Twentyone from '../../../assets/image/twentyone.png';

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
      
      <figure>
        <img src={One} alt=""/>
        <img src={Two} alt=""/>
        <img src={Three} alt=""/>
        <img src={Four} alt=""/>
        <img src={Five} alt=""/>
        <img src={Six} alt=""/>
        <img src={Seven} alt=""/>
        <img src={Eight} alt=""/>
        <img src={Nine} alt=""/>
        <img src={Ten} alt=""/>
        <img src={Eleven} alt=""/>
        <img src={Twelve} alt=""/>
        <img src={Thriteen} alt=""/>
        <img src={Fourteen} alt=""/>
        <img src={Fiveteen} alt=""/>
        <img src={Sixteen} alt=""/>
        <img src={Seventeen} alt=""/>
        <img src={Eighteen} alt=""/>
        <img src={Nineteen} alt=""/>
        <img src={Twenty} alt=""/>
        <img src={Twentyone} alt=""/>
      </figure>

      <strong>Say Hi & Get in Touch</strong>
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
