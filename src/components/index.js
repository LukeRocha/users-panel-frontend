import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Header";
import Form from "./Form";
import Users from "./Users";
import Error from "./Error";
import Button from "./Button";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Users />
        </Route>
        <Route path="/user">
          <Form />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;