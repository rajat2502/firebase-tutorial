import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from './Firebase'
import * as ROUTES from './constants/routes';

const SignUp = () => (
    <div>
        <h1>SignUp</h1>
        <SignUpForm />
    </div>
)

const INITIAL_STATE = {
    username: '',
    email: '',
    password1: '',
    password2: '',
    error: null
}

class SignUpFormBase extends Component {

    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE }
    }

    handleSubmit = e => {
        e.preventDefault();
        const { username, email, password1 } = this.state;
        this.props.firebase
        .doCreateUserWithEmailAndPassword(email, password1)
        .then(authUser => {
            return this.props.firebase
                .user(authUser.user.uid)
                .set({
                    username,
                    email
                });
        })
        .then(() => {
            this.setState({ ...INITIAL_STATE }); //on successful signup set state to initial values
            this.props.history.push(ROUTES.HOME); //to redirect the authenticated user to Homepage
        })
        .catch(error => {
            this.setState({ error });
        });
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {

        const { username, email, password1, password2, error } = this.state;
        const isInvalid = password1 !== password2 || password1 === '' || email === '' || username === '';

        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <input 
                     name="username"
                     value={username}
                     onChange={this.handleChange}
                     type="text"
                     placeholder="Enter Full Name"
                    />
                    <input 
                     name="email"
                     value={email}
                     onChange={this.handleChange}
                     type="text"
                     placeholder="Email Address"
                    />
                    <input 
                     name="password1"
                     value={password1}
                     onChange={this.handleChange}
                     type="password"
                     placeholder="Password"
                    />
                    <input 
                     name="password2"
                     value={password2}
                     onChange={this.handleChange}
                     type="password"
                     placeholder="Confirm Password"
                    />
                    <button type="submit" disabled={isInvalid} >Sign Up</button>

                    {error && <p>{error.message}</p>}
                </form>
                
            </div>
        )
    }
}

const SignUpForm = compose(
    withRouter, 
    withFirebase
)(SignUpFormBase); //compose is used when we are passing are component through more than one higher order component

const SignUpLink = () => {
    return (
        <p>Don't have an Account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link></p>
    )
}

export default SignUp;

export { SignUpLink, SignUpForm };
