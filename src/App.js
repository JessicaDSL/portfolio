import React from "react";

import { BrowserRouter } from "react-router-dom";

import Global from "./styles/global";
import Routes from "./routes";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Global />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
