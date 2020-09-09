import React from "react";
import { Carousel } from "react-responsive-carousel";

import CarStore from '../../../assets/image/layout/carstore.png';
import Notify from '../../../assets/image/layout/notify.png'
import Donaty from '../../../assets/image/layout/donaty.png'
import { Container, Legend } from './styles'

export default () => (
  <Container>
  <Carousel autoPlay>
    <div>
      <img alt="" src={CarStore} />
      <p className="legend">CarStore</p>
    </div>
    <div>
      <img alt="" src={Notify} />
      <p className="legend">Notify</p>
    </div>
    <div>
      <img alt="" src={Donaty} />
      <p className="legend">Legend 3</p>
    </div>
  </Carousel>
  </Container>
);
