import React, { Fragment, Component } from "react";
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { SignUpLink } from './SignUp';
import { PasswordForgetLink } from './PasswordForget';
import { withFirebase } from './Firebase';
import * as ROUTES from './constants/routes';

const SignIn = () => {
  return (
    <Fragment>
      <h1>SignIn</h1>
      <SignInForm />
      <PasswordForgetLink />
      <SignUpLink />
    </Fragment>
  );
};

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
    const { email, password } = this.state;
    e.preventDefault();
    this.props.firebase
    .doSignInWithEmailAndPassword(email, password)
    .then(() => {
      this.setState({ ...INITIAL_STATE });
      this.props.history.push(ROUTES.HOME)
    })
    .catch(error => {
      this.setState({ error });
    });
  }

  render() {
    const { email, password ,error } = this.state;
    const isInvalid = password === '' || email === '';
    
    return (
      <form onSubmit={this.handleSubmit}>
        <input
         type="text"
         name="email"
         value={email}
         onChange={this.handleChange}
         placeholder="Enter email"
         />
         <input
         type="password"
         name="password"
         value={password}
         onChange={this.handleChange}
         placeholder="Password"
         />
         <button disabled={isInvalid} type="submit">Sign In</button>
         {error && <p>{error.message}</p>}
      </form>
    )
  }
}

const SignInForm = compose(
  withRouter, 
  withFirebase
)(SignInFormBase);

export { SignInForm };

export default SignIn;
