import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LayoutPage from "./pages/LayoutPage";
import ContactPage from "./pages/ContactPage";
import CarStorePage from "./pages/CarStorePage";

export default function Routes() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route>
        <Route path="/" exact component={HomePage} />
        <Route path="/contact-page" component={ContactPage} />
        <Route path="/layout-page" component={LayoutPage} />
        <Route path="/carstore" component={CarStorePage} />
      </Route>
    </BrowserRouter>
  );
}
