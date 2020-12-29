import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import DefaultPage from './pages/DefaultPage';
import AutiPage from "./pages/AutiPage";
import CarStorePage from "./pages/CarStorePage";
import NotifyPage from "./pages/NotifyPage";
import Cart from './pages/GoJessyStore/Cart';
import HomeCart from './pages/GoJessyStore/HomeCart';
import MainCart from './pages/GoJessyStore/MainCart';


export default function Routes() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact component={DefaultPage} />
        <Route path="/carstore" component={CarStorePage} />
        <Route path="/auti" component={AutiPage} />
        <Route path="/notify" component={NotifyPage} />
        <Route path="/cart" component={Cart} />
        <Route path="/homecart" component={HomeCart} />
        <Route path="/maincart" component={MainCart} />
      </Switch>
    </BrowserRouter>
  );
}
