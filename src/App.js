import React from 'react';
import { BrowserRouter } from "react-router-dom";

import Routes from './routes';
import Global from './styles/global';
import Hero from './components/Hero';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Global />
      <Hero />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
