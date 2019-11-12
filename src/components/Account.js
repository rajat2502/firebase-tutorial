import React, { Fragment } from "react";

import { PassowrdForgetForm } from './PasswordForget';
import PasswordChange from './PasswordChange';

const Account = () => {
  return (
    <Fragment>
      <h1>Account</h1>
      <PassowrdForgetForm />
      <PasswordChange />
    </Fragment>
  );
};

export default Account;
