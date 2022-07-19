import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogin } from "../../helpers/auth"

const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log("isLoggedInprivate-----", localStorage.getItem('my-token'))
  return (
    <Route {...rest} render={(props) =>
      isLogin() ?
        <Component {...props} />
        : <Redirect to="/" />
    } />
  );
};

export default PrivateRoute
