import React, { Component, Fragment } from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";

import InputField from "components/common/inputFields";
import Button from "components/common/button";
import Navigation from "components/common/navBar";
import { userActions } from "actions/userActions";
import { validate } from "helpers/validate"
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

  // componentDidMount() {
  //   if(localStorage.getItem('auth')){
  //       this.props.history.push('/dashboard');
  //   }
// }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    let { formErrors } = this.state;
    validate.validateRegistration(name, formErrors, value)
    this.setState({ ...this.state, formErrors, [name]: value });
  };

  handleLogin = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const { dispatch } = this.props;
    if (email && password) {
      dispatch(userActions.loginUser(email, password));
    }
    this.props.history.push('/dashboard');
  };
  
  render() {
    const { email, password, formErrors } = this.state;
    const disableSubmitButton = email === '' || password === '';
    return (
      <Fragment>
        <Navigation />
        <div className="form-main">
          <form className="flex-form" onSubmit={this.handleLogin}>
            <h2 className="form-group">Login</h2>

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
                    <div
                    className="input-error"
                      >{`* ${formErrors.emailError}`}</div>
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
                    <div
                    className="input-error"
                      >{`* ${formErrors.passwordError}`}</div>
                  )}
            </div>

            <Button
              text="Login"
              type="submit"
              value="Submit"
              disabled={disableSubmitButton}
              className="btn btn-primary"
            />
          </form>
        </div>
      </Fragment>
    );
  }
}
// Register.propTypes = {
//   classes: PropTypes.object.isRequired,
// };
function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
     return {
        loggingIn
     };
}

export default connect(mapStateToProps, null, null,  {
  pure: false})(Login);
