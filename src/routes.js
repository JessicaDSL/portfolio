import React from "react";
import { Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LayoutPage from "./pages/LayoutPage";
import ContactPage from "./pages/ContactPage";
import AutiPage from './pages/AutiPage';

export default function Routes() {
  return (
      <>
        <Route path="/" exact component={HomePage} />
        <Route path="/contact-page" component={ContactPage} />
        <Route path="/layout-page" component={LayoutPage} />
        <Route path="/auti" component={AutiPage} />
      </>
  );
}
