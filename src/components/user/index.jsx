import React, { Fragment } from 'react';
import Signup from "components/user/signup";
import Login from "components/user/login";
import Navigation from "components/common/navBar";

const UserAuth = ({ onLogin, user, setUser, toggleForm, onToggleForm }) => {
    return (
        <Fragment>
            <div className="container-fluid">
                <Navigation onToggleForm={onToggleForm} />
                <div className="row">
                    <div className="col-4 aside-bar">
                    </div>
                    <div className="col-8">
                        {toggleForm ?
                            <Login onToggleForm={onToggleForm} onLogin={onLogin} user={user} setUser={setUser} /> :
                            <Signup onToggleForm={onToggleForm} />
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default UserAuth;