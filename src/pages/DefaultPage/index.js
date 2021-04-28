import React from 'react';

import Header from '../../components/Header';
import Home from "../HomePage";
import Portfolio from "../PortfolioPage";
import Contact from "../ContactPage";

const DefaultPage = () => {
  return(
    <div>
      <Header />
      <Home />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default DefaultPage;