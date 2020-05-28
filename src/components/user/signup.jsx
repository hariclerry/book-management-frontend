import React, { Fragment, useState } from "react";
// import {NotificationContainer, NotificationManager} from 'react-notifications';

import InputField from "components/common/inputFields";
import Button from "components/common/button";
import Navigation from "components/common/navBar";
import "./index.scss";
// import { API } from 'httpServices/authService';
// import './home.scss';

const Signup = (props) => {
  //   const initialFormState = {
  //     name: '',
  //     phoneNumber: '',
  //     password: '',
  //     formErrors: {
  //       nameError: '',
  //       phoneNumberError: '',
  //       passwordError: ''
  //     }
  //   };
  //   const [user, setUser] = useState(initialFormState);

  //   const handleInputChange = event => {
  //     const { name, value } = event.target;
  //     let formErrors = user.formErrors;

  //     switch (name) {
  //       case 'name':
  //         formErrors.nameError =
  //           value.length < 5 ? 'Name must be 3 characters long!' : '';
  //         break;
  //       case 'phoneNumber':
  //         formErrors.phoneNumberError =
  //           value.length < 5 ? 'Phone number must be 5 characters long!' : '';
  //         break;
  //       case 'password':
  //         formErrors.passwordError =
  //           value.length < 5 ? 'Password must be 5 characters long!' : '';
  //         break;
  //       default:
  //         break;
  //     }
  //     setUser({ ...user, formErrors, [name]: value });
  //   };

  //   const handleSubmit = async event => {
  //     event.preventDefault();
  //     const { name, phoneNumber, password } = user;
  //     try {
  //       await API.post(`/user`, { name, phoneNumber, password });
  //       props.history.push('/login');
  //       NotificationManager.success('User registration successful, login to continue!');
  //     } catch (error) {
  //       // Fix the error response @harriet
  //       NotificationManager.error(`Error: ${error}`);
  //     }
  //   };
  //   const disableSubmitButton =
  //     user.name === '' || user.phoneNumber === '' || user.password === '';
  return (
    <Fragment>
      <Navigation />
      <div className="form-main">
        <form className="flex-form">
            <h2 className="form-group">Signup</h2>
        <p className="form-group">Start your journey of enjoyment with us by signing up today</p>
          <div className="form-group">
            <InputField
              htmlFor="exampleInputText"
              label="Username"
              type="text"
              id="exampleInputText"
              className="form-control"
              // value={user.password}
              // onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <InputField
              htmlFor="exampleInputEmail1"
              label="Email address"
              type="email"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              className="form-control"
              // value={user.password}
              // onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <InputField
              htmlFor="exampleInputPassword1"
              label="Password"
              type="password"
              id="exampleInputPassword1"
              className="form-control"
              // value={user.password}
              // onChange={handleInputChange}
            />
          </div>

          <Button
            text="Signup"
            type="submit"
            value="Submit"
            className="btn btn-primary"
          />
        </form>
      </div>
    </Fragment>
  );
};

export default Signup;
