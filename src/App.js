import React from 'react';
import { BrowserRouter } from "react-router-dom";

import Routes from './routes';
import Global from './styles/global';
import Hero from './components/Hero';
import LayoutPage from './pages/LayoutPage';


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Hero />
      <Routes />
      <Global />
      <LayoutPage />
    </BrowserRouter>
  );
}

export default App;
