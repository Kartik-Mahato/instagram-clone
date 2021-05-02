import React from 'react';
import PropTypes from 'prop-types';
import * as ROUTES from '../constants/routes';
import { Redirect, Route } from 'react-router';


const IsUserLoggedIn = ({ user, loggedInPath, children, ...rest }) => {
    return (
        <Route
            {...rest}
            render={({ location }) => {
                if (!user) {
                    return children
                }
                if (user) {
                    return (
                        <Redirect
                            to={{
                                pathname: loggedInPath,
                                state: { from: location }
                            }}
                        />
                    )

                }
                return null;
            }}
        />
    )
}

export default IsUserLoggedIn

IsUserLoggedIn.propTypes = {
    user: PropTypes.object,
    loggedInPath: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired
}