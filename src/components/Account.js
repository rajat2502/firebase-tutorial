import React, { Fragment } from "react";

import { PassowrdForgetForm } from './PasswordForget';
import PasswordChange from './PasswordChange';

const Account = () => {
  return (
        <div>
          <h1>Account: {JSON.parse(localStorage.getItem('authUser')).email}</h1>
          <PassowrdForgetForm />
          <PasswordChange />
        </div>
  );
};

export default Account;
