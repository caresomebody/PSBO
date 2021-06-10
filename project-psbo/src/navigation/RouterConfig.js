import React from "react";
import { Route, Switch } from "react-router";
import Login from "containers";
import Home from "containers/Home/Home";
import RoomDetail from "containers/RoomDetail/RoomDetail";
import Order from "containers/Order/Order";
import OrderDetail from "containers/OrderDetail/OrderDetail";
import HomeAdmin from "containers/HomeAdmin/HomeAdmin";
import OrderDetailAdmin from "containers/OrderDetailAdmin/OrderDetailAdmin";
import OrderForm from "containers/OrderForm/OrderForm";

function RouterConfig() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/beranda" component={Home} />
      <Route exact path="/detail-ruangan" component={RoomDetail} />
      <Route exact path="/pengajuan" component={Order} />
      <Route exact path="/detail-pengajuan" component={OrderDetail} />
      <Route exact path="/dashboard-admin" component={HomeAdmin} />
      <Route exact path="/detail-pengajuan-admin" component={OrderDetailAdmin} />
      <Route exact path="/form-pengajuan" component={OrderForm} />
    </Switch>
  );
}

export default RouterConfig;
