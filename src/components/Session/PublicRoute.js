import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import * as ROUTES from '../constants/routes';

const PublicRoute = ({ component: Component, restricted, ...rest }) => (
    <Route 
        {...rest}
        render = {props => 
        JSON.parse(localStorage.getItem('authUser')) !== null && restricted ? (
            <Redirect
                to={ROUTES.HOME} />
        ) : (
            <Component {...props} />
        )        
        }
    />
)

export default PublicRoute;