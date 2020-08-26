import React from 'react';

import { Container } from './styles';

import { list } from './content';
import Sponser from '../Sponser';

const SponserList = () => {
    return(
    <Container>
      {list.map((item, index) => (
        <Sponser
          key={index}
          image={item.image}
        />
        
      ))}
    </Container>
  );
}

export default SponserList;