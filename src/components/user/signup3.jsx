import React, { Fragment, useState } from "react";
// import {NotificationContainer, NotificationManager} from 'react-notifications';

import InputField from "components/common/inputFields";
import Button from "components/common/button";
import Navigation from "components/common/navBar";
import "./index.scss";
// import { API } from 'httpServices/authService';
// import './home.scss';

const Signup2 = (props) => {
  return (
    <Fragment>
      <Navigation />
      <div className="form-main">
        <form className="flex-form">
          <h2 className="form-group">Signup</h2>
          <p className="form-group">
            Start your journey of enjoyment with us by signing up today
          </p>
          <div className="form-group">
            <InputField
              htmlFor="exampleInputText"
              label="Username"
              type="text"
              id="exampleInputText"
              className="form-control"
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
            />
          </div>
          <div className="form-group">
            <InputField
              htmlFor="exampleInputPassword1"
              label="Password"
              type="password"
              id="exampleInputPassword1"
              className="form-control"
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

export default Signup2;
