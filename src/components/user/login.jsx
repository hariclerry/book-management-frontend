import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import InputField from "components/common/inputFields";
import Button from "components/common/button";
import { userActions } from "actions/userActions";
import { validate } from "helpers/validate";
import "./index.scss";

class Login extends Component {
  state = {
    email: "",
    password: "",
    formErrors: {
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


  handleLogin = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const { dispatch } = this.props;
    if (email && password) {
      dispatch(userActions.loginUser(email, password, this.props.history));
      this.props.history.push('/dashboard')
    }
  };

  render() {
    const { email, password, formErrors } = this.state;
    const { onToggleForm } = this.props
    const disableSubmitButton = email === "" || password === "";
    return (
      <Fragment>
        <div className="form-main-register">
          <form className="flex-form">
            <h2 className="form-group account-text">Login</h2>

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
              text="Login"
              type="submit"
              value="Submit"
              disabled={disableSubmitButton}
              className="btn btn-success size-button"
              onClick={this.handleLogin}
            />
            <p className="lead-account">
              Haven't yet created an account? {""}
              <button className="link-account" onClick={() => onToggleForm(false)}>
                Signup Here
              </button>
            </p>
          </form>
          <footer className="footer-text">
            <p>Copyright &copy; {new Date().getFullYear()}. Harriet</p>
          </footer>
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  return {
    loggingIn,
  };
}

export default withRouter(connect(mapStateToProps, null, null, {
  pure: false,
})(Login));
