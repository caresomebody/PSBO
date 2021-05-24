import React from "react";
import { Route, Switch } from "react-router";
import Login from "containers";
import Home from "containers/Home/Home";
import RoomDetail from "containers/RoomDetail/RoomDetail";

function RouterConfig() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/beranda" component={Home} />
      <Route exact path="/detail-ruangan" component={RoomDetail} />
    </Switch>
  );
}

export default RouterConfig;
