import React, { Component, Fragment } from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";

import InputField from "components/common/inputFields";
import Button from "components/common/button";
import Navigation from "components/common/navBar";
import  createUser from "actions/userActions";
import { validate } from "helpers/validate"
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

  componentDidMount() {
    if(localStorage.getItem('auth')){
        this.props.history.push('/dashboard');
    }
}

  handleInputChange = (event) => {
    const { name, value } = event.target;
    let { formErrors } = this.state;
    validate.validateRegistration(name, formErrors, value)
    this.setState({ ...this.state, formErrors, [name]: value });
  };

  handleRegistration = (event) => {
    event.preventDefault();
    const { userName, email, password } = this.state;
    const { dispatch } = this.props;
    if (userName && email && password) {
      dispatch(createUser(userName, email, password));
    }
    this.props.history.push('/signup');
  };
  
  render() {
    const { userName, email, password, formErrors } = this.state;
    const disableSubmitButton =
    userName === '' || email === '' || password === '';
    return (
      <Fragment>
        <Navigation />
        <div className="form-main">
          <form className="flex-form" onSubmit={this.handleRegistration}>
            <h2 className="form-group">Signup</h2>
            <p className="form-group">
              Start your journey of enjoyment with us by signing up today
            </p>
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
                    <div
                    className="input-error"
                      >{`* ${formErrors.userNameError}`}</div>
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
              text="Signup"
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
  return state;
}

export default connect(mapStateToProps, null)(Signup);
