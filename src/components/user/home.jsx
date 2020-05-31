import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

import "./home.scss";

const Home = (props) => {
  return (
    <Fragment>
      <div className="text-center main-cover">
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <header className="masthead mb-auto">
            <div className="inner">
              <h3 className="masthead-brand">BMA</h3>
              <nav className="nav nav-masthead justify-content-center">
                <NavLink exact className="nav-link active" to="/">
                  Home
                </NavLink>
                <NavLink className="nav-link" to="/signup">
                  Signup
                </NavLink>
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </nav>
            </div>
          </header>

          <main role="main" className="inner cover">
            <h1 className="cover-heading">Book Management App</h1>
            <p className="lead">
              This is a simple book management tool that is easy to use, Book
              Management App helps you record, keep track and organise your
              books lists. Click the link below to get started.
            </p>
            <p className="lead">
              <NavLink className="btn btn-lg btn-secondary" to="/signup">
                Get Started
              </NavLink>
            </p>
          </main>

          <footer className=".copy-right mt-auto">
            <div className="inner">
              <p>Copyright &copy; 2020. Harriet</p>
            </div>
          </footer>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
