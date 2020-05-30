import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { userActions } from "actions/userActions";
import "../user/home.scss";

const Navigation = (props) => {
  const handleLogout = (event) => {
    const { dispatch } = props;
    dispatch(userActions.logout());
    props.history.push('/login')
  };

  const { loggedIn } = props;
  return (
    <Fragment>
      <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
        <h3 className="masthead-brand logo-size">BMA</h3>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          {loggedIn && loggedIn === true ? (
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <NavLink exact className="nav-link active" to="/dashboard">
                  Dashboard
                </NavLink>
              </li>
              <li class="nav-item" style={{ paddingLeft: "1100px" }}>
                <button style={{ background: "#343a40",border:"none" }} onClick={() => handleLogout()}>
                <NavLink
                  className="nav-link"
                  to="/logout"
                >
                  Logout
                </NavLink>
                </button>
              </li>
            </ul>
          ) : (
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <NavLink exact className="nav-link active" to="/">
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/signup">
                  Signup
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  loggedIn: state.authentication.loggedIn,
});

export default withRouter(
  connect(mapStateToProps, null, null, { pure: false })(Navigation)
);
