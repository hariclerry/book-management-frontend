import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'components/user/home';
import Signup from 'components/user/signup';

// import './App.css';

function App() {
  return (
      <Switch>
   <Route path="/signup" component={Signup} />
        {/*<Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path="/form" component={ContactForm} />
        <Route path="/editForm/:id" component={EditForm} />
        <Route path="/sms/:id" component={SmsBoard} /> */}
        <Route exact path="/" component={Home} />
      </Switch>
  );
}

export default App;
