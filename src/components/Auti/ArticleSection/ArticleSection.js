import React from 'react';

// import { Container } from './styles';

const ArticleSection = () => {
  return <div />;
}

import React from "react";
import styled from "styled-components";

import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Container = styled.div`
  svg {
    color: ${(props) => props.enable && `red`};
  }
`;

const Star = ({ enable, half }) => {
  return (
    <Container enable={enable}>
      <FaStar />
      <FaStarHalfAlt />
    </Container>
  );
};

const Stars = ({ numStars }) => {
  const list = [
    1, 2, 3, 4, 5, 6
  ]
  return (
  <div>
    {list.map((item, index) => (
      <Star enable={item <= numStars} />
    ))}
  </div>
  );
};

export default function App() {
  const name = `Jéssica`;
  return (
    <div className="App">
      <Stars  numStars={4} />
      <h1>{`Hello, ${name}`}</h1>
      <FaStarHalfAlt />
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}



--------


import React from "react";
import styled from "styled-components";

import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Container = styled.div`
  svg {
    color: red;
  }
`;

const Star = ({ enable, half }) => {
  return (
    <Container enable={enable}>
      {half 
        ? <FaStarHalfAlt /> 
        : enable ? <FaStar /> : <FaRegStar />}
    </Container>
  );
};

const Stars = ({ numStars }) => {
  const list = [
    1, 2, 3, 4, 5
  ]
  const round = Math.ceil(numStars);

  return (
  <div>
    {list.map((item, index) => (
      <Star enable={item <= round} half={
        !(numStars % 1 === 0) && (item === round)
      }
       />
    ))}
  </div>
  );
};

export default function App() {
  const name = `Jéssica`;
  return (
    <div className="App">
      <Stars  numStars={4.5} />
      <h1>{`Hello, ${name}`}</h1>
      <FaStarHalfAlt />

      <h2>{4.0%1}</h2>
    </div>
  );
}


export default ArticleSection;