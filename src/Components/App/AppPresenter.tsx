import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "../../Routes/Home";

const AppPresenter: React.SFC = () => (
  <BrowserRouter>
    <Switch>
      <Route path={"/"} component={Home} />
      <Redirect from={"*"} to={"/"} />
    </Switch>
  </BrowserRouter>
);

export default AppPresenter;