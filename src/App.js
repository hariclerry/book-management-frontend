import React, { Fragment } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";

import Home from "components/user/home";
import Signup from "components/user/signup";
import Login from "components/user/login";
import Dashboard from "components/books";
import PrivateRoute from "components/user/privateRoute";

function App() {
  return (
    <Fragment>
       <BrowserRouter>
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route exact path="/" component={Home} />
      </Switch>
      <NotificationContainer />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
