import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";

import "../user/home.scss";

const Navigation = (props) => {
  return (
    <Fragment>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <h3 className="masthead-brand">BMA</h3>
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
        </div>
      </nav>
    </Fragment>
  );
};

export default Navigation;
