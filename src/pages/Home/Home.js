import React from "react";

import Header from "../../components/Header/Header";
import HomePage from "../../components/HomePage/HomePage";
import Portfolio from "../../components/Portfolio";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <HomePage />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
