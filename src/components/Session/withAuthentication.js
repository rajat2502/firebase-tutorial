import React from 'react';

import AuthUserContext from './Context';
import { withFirebase } from '../Firebase';

const withAuthentication = Component => {
    class WithAuthentication extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
              authUser: null
            }
          }
        
          componentDidMount() {
            this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
              authUser
              ? this.setState({ authUser })
              : this.setState({ authUser: null });
            });
          }
        
          componentWillUnmount() {
            this.listener();
          }

        render() {
            localStorage.setItem('authUser', JSON.stringify(this.state.authUser));
            return (
                <AuthUserContext.Provider value={this.state.authUser}>
                    <Component {...this.props} />
                </AuthUserContext.Provider>
            )
        }
    }
    return withFirebase(WithAuthentication);
}

export default withAuthentication;