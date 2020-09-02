import React from 'react';

import { Container, Content, LightGrayContentA, DarkGrayContentA, DarkGrayContentB, LightGrayContentB} from './styles';

const ProductsSection = () => {
  return(
    <Container>
      <Content>
        <LightGrayContentA>
          <div>
          <h1>Headlights</h1>
          <p>Headlights Projector, LED, Factory</p>
          </div>
        </LightGrayContentA>

        <DarkGrayContentA>
          <div>
          <h1>Headlights</h1>
          <p>Headlights Projector, LED, Factory</p>
          </div>
        </DarkGrayContentA>
      
        <DarkGrayContentB>
          <div>
          <h1>Headlights</h1>
          <p>Headlights Projector, LED, Factory</p>
          </div>
        </DarkGrayContentB>

        <LightGrayContentB>
          <div>
          <h1>Headlights</h1>
          <p>Headlights Projector, LED, Factory</p>
          </div>
        </LightGrayContentB>
      </Content>
    </Container>
  );
}

export default ProductsSection;