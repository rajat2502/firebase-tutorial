import React, { Component } from 'react';

import { withFirebase } from './Firebase';

const INITIAL_STATE = {
    password1: '',
    password2: '',
    error: null
};

class PasswordChange extends Component {

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
        const { password1 } = this.state;
        e.preventDefault();
        this.props.firebase
        .doPasswordUpdate(password1)
        .then(() => {
            this.setState({ ...INITIAL_STATE })
        })
        .catch(error => {
            this.setState({ error })
        })
    }

    render() {
        const { password1, password2, error } = this.state;
        const isInvalid = password1 !== password2 || password1 === '';

        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                type="password"
                name="password1"
                value={password1}
                onChange={this.handleChange}
                placeholder="New Password"
                />
                <input 
                type="password"
                name="password2"
                value={password2}
                onChange={this.handleChange}
                placeholder="Confirm Password"
                />
                <button type="submit" disabled={isInvalid}>
                    Reset my Password
                </button>

                {error && <p>{error.message}</p>}
            </form>
        )
    }
}

export default withFirebase(PasswordChange);