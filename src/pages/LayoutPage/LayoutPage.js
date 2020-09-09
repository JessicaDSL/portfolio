import React from "react";
import { render } from "react-dom";
import Portfolio from "../../components/Layout/Portfolio";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Container } from './styles';

const LayoutPage = () => {
  return (
    <div>
      <Portfolio />
    </div>
  );
};


export default LayoutPage;
