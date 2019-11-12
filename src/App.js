import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import * as ROUTES from "./components/constants/routes";
import { withAuthentication } from './components/Session';

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Home from "./components/Home";
import Account from "./components/Account";
import Admin from "./components/Admin";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import PasswordForget from "./components/PasswordForget";

const App = () => {

  return  (
        <Router>
          <Navbar />
          <hr />
          <Switch>
            <Route exact path={ROUTES.LANDING} component={Landing} />
            <Route exact path={ROUTES.HOME} component={Home} />
            <Route exact path={ROUTES.ACCOUNT} component={Account} />
            <Route exact path={ROUTES.ADMIN} component={Admin} />
            <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
            <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
            <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
          </Switch>
        </Router>
    )
};

export default withAuthentication(App);
