import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withFirebase } from './Firebase';
import * as ROUTES from './constants/routes';

const PasswordForget = () => {
    return (
        <div>
            <h1>Password Forget</h1>
            <PassowrdForgetForm />
        </div>
    )
}

const INITIAL_STATE = {
    email: '',
    error: null
}

class PassowrdForgetBase extends Component {

    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    handleSubmit = e => {
        const {email} = this.state;
        e.preventDefault();
        this.props.firebase
        .doPasswordReset(email)
        .then(() => {
            this.setState({ ...INITIAL_STATE })
        })
        .catch(error => {
            this.setState({ error })
        })
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        const { email, error } = this.state;
        const isInvalid = email === '';

        return (
            <form onSubmit={this.handleSubmit}>
                <input
                 type="text"
                 name="email"
                 value={email}
                 onChange={this.handleChange}
                 placeholder="Email Address"
                />
                <button disabled={isInvalid} type="submit">
                    Reset my Password
                </button>
                { error && <p>{error.message}</p> }
            </form>
        )
    }
}

const PasswordForgetLink = () => {
    return (
        <p>
            <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
        </p>
    )
}

const PassowrdForgetForm = withFirebase(PassowrdForgetBase);

export default PasswordForget;

export { PassowrdForgetForm, PasswordForgetLink };