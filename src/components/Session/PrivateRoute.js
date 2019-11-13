import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import * as ROUTES from '../constants/routes';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route 
        {...rest}
        render = {props => 
        JSON.parse(localStorage.getItem('authUser')) ? (
            <Component {...props} />
        ) : (
            <Redirect
                to={ROUTES.SIGN_IN} />
        )        
        }
    />
)

export default PrivateRoute;