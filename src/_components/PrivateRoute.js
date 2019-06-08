import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { authenticationService } from '../_services';

export const PrivateRoute = ({ component: Component, roles, ...rest }) => (
  <Route 
    {...rest}
    render={props => {
      const currentUser = authenticationService.currentUserValue;

      if (!currentUser) {
        /** Not logged in so redirect to login page with the return url */
        return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
      }

      /** Check if route is restricted by role */
      if (roles && roles.indexOf(currentUser.role) === -1) {
        /** Role not authorised so redirect to home page */
        return <Redirect to={{ pathname: '/' }} />;
      }

      /** Authorised so return component */
      return <Component {...props} />;
    }} 
  />
);
