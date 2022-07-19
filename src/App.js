import React, { Fragment, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";

import UserAuth from "components/user";
import Dashboard from "components/books";
import PrivateRoute from "components/user/privateRoute";

function App() {

  const [toggleForm, setToggleForm] = useState(false)

  const handleToggleForm = (value) => {
    setToggleForm(value)
  }

  return (
    <Fragment>
      <Switch>
        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <Route exact path="/" component={() => <UserAuth onToggleForm={handleToggleForm} toggleForm={toggleForm} />} />
      </Switch>
      <NotificationContainer />
    </Fragment>
  );
}

export default withRouter(connect(null, null, null, {
  pure: false,
})(App));
