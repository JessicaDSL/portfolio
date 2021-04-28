import React from "react";

import Child from "../../../assets/image/auti/child.png";
import { Container, Content, Section, Main } from "./styles";

const SubscribeSection = () => {
  return (
    <Container>
      <Section>
      <Main>
        <img src={Child} alt="dog" />
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue
            urna, tincidunt ut pretium ut, lacinia eget nisl. Mauris dignissim
            lectus lorem, nec tempor libero finibus ut. Vivamus posuere gravida
            sem vitae vestibulum. Vestibulum et justo vestibulum leo pretium
            tempus consectetur vitae mauris. Ut varius eget metus et cursus. Nam
            sed libero risus.
          </p>
          <p>
          
            Curabitur vel ligula mollis, laoreet enim eu, pretium ipsum. Proin
            sodales lectus id erat aliquet sodales. Cras pellentesque justo eget
            lectus convallis feugiat et at neque. Nulla volutpat lacus eget
            lobortis accumsan. Nullam eu egestas leo. Vivamus convallis nisl
            eget dui hendrerit condimentum. Fusce quam urna, pharetra id
            consectetur ac, consectetur sed nisl. Sed porttitor viverra erat,
            vel pharetra elit luctus vel. Duis ultricies lorem vel ex egestas,
            vel aliquam sem mattis. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus.
          </p>
          <button>SIGN AND HELP!</button>
          </div>
      </Main>
      </Section>
      <Content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          hendrerit, ex sed eleifend vestibulum.
        </p>
        <p>
          Lectus ligula fermentum nisi, sit amet blandit lacus nisi eu erat.
          Duis commodo eget enim nec bibendum. Duis diam neque, tempus quis sem
          id, faucibus ultricies lectus. Integer ac pharetra diam. Aenean arcu
          ligula, ultrices sit amet accumsan non, luctus  .
        </p>
      </Content>
    </Container>
  );
};

export default SubscribeSection;
