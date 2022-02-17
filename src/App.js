import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Portfolio from "./components/Portfolio";
import Home from "./pages/Home/Home";
import Global from "./styles/global";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Global />
      <ToastContainer autoClose={3000} position="bottom-right"/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
};

export default App;
