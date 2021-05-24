import React from "react";
import { Route, Switch } from "react-router";
import Login from "containers";
import Home from "containers/Beranda/Beranda";

function RouterConfig() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/beranda" component={Home} />
    </Switch>
  );
}

export default RouterConfig;
