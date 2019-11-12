import React from "react";
import { Link } from "react-router-dom";

import { AuthUserContext } from './Session/index';
import * as ROUTES from "./constants/routes";
import SignOut from './SignOut';

const Navbar = () => {
  return (
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavbarAuth /> : <NavbarNonAuth />
      }
    </AuthUserContext.Consumer>
  );
};

const NavbarAuth = () => {
  return (
    <ul className="navbar">
        <li>
          <Link to={ROUTES.LANDING}>Landing</Link>
        </li>
        <li>
          <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
          <Link to={ROUTES.ACCOUNT}>Account</Link>
        </li>
        {/* <li>
          <Link to={ROUTES.ADMIN}>Admin</Link>
        </li> */}
        <li>
          <SignOut />
        </li>
      </ul>
  )
}

const NavbarNonAuth = () => {
  return (
    <ul className="navbar">
        <li>
          <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </li>
        <li>
          <Link to={ROUTES.LANDING}>Landing</Link>
        </li>
      </ul>
  )
}

export default Navbar;
