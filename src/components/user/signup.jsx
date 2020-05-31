import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import InputField from "components/common/inputFields";
import Button from "components/common/button";
import Navigation from "components/common/navBar";
import { userActions } from "actions/userActions";
import { validate } from "helpers/validate";
import "./index.scss";

class Signup extends Component {
  state = {
    userName: "",
    email: "",
    password: "",
    formErrors: {
      userNameError: "",
      emailError: "",
      passwordError: "",
    },
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    let { formErrors } = this.state;
    validate.validateRegistration(name, formErrors, value);
    this.setState({ ...this.state, formErrors, [name]: value });
  };

  handleRegistration = (event) => {
    event.preventDefault();
    const { userName, email, password } = this.state;
    const { dispatch } = this.props;
    if (userName && email && password) {
      dispatch(userActions.createUser(userName, email, password));
    }
    this.props.history.push("/login");
  };

  render() {
    const { userName, email, password, formErrors } = this.state;
    const disableSubmitButton =
      userName === "" || email === "" || password === "";
    return (
      <Fragment>
        <Navigation />
        <div className="form-main">
          <form className="flex-form" onSubmit={this.handleRegistration}>
            <h2 className="form-group account-text">Create Account</h2>
            <div className="form-group">
              <InputField
                htmlFor="exampleInputText"
                label="Username"
                name="userName"
                type="text"
                id="exampleInputText"
                className="form-control"
                value={userName}
                onChange={this.handleInputChange}
              />
              {formErrors.userNameError.length > 0 && (
                <div className="input-error">{`* ${formErrors.userNameError}`}</div>
              )}
            </div>

            <div className="form-group">
              <InputField
                htmlFor="exampleInputEmail1"
                label="Email address"
                name="email"
                type="email"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                className="form-control"
                value={email}
                onChange={this.handleInputChange}
              />
              {formErrors.emailError.length > 0 && (
                <div className="input-error">{`* ${formErrors.emailError}`}</div>
              )}
            </div>
            <div className="form-group">
              <InputField
                htmlFor="exampleInputPassword1"
                label="Password"
                name="password"
                type="password"
                id="exampleInputPassword1"
                className="form-control"
                value={password}
                onChange={this.handleInputChange}
              />
              {formErrors.passwordError.length > 0 && (
                <div className="input-error">{`* ${formErrors.passwordError}`}</div>
              )}
            </div>

            <Button
              text="Signup"
              type="submit"
              value="Submit"
              disabled={disableSubmitButton}
              className="btn btn-primary size-button"
            />
            <p className="lead-account">
              Have already an account? {''}
              <NavLink className="link-account" to="/login">
               Login Here 
              </NavLink>
            </p>
          </form>
        </div>
        <footer className="footer-text">
              <p>Copyright &copy; 2020. Harriet</p>
          </footer>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(Signup);
