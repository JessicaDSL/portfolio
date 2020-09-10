import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LayoutPage from "./pages/LayoutPage";
import ContactPage from "./pages/ContactPage";
import AutiPage from './pages/AutiPage';
import CarStorePage from "./pages/CarStorePage";
import NotifyPage from "./pages/NotifyPage";

export default function Routes() {
  return (
    
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/layout" component={LayoutPage} />
        <Route path="/carstore" component={CarStorePage} />
        <Route path="/auti" component={AutiPage} />
        <Route path="/notify" component={NotifyPage} />
      </Switch>
  );
}
