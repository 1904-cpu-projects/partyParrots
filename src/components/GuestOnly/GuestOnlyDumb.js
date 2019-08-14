import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const GuestOnly = ({ exact, path, component: Comp, loggedIn }) => {
  return (
    <Route
      exact={exact === undefined ? true : exact}
      path={path}
      render={props => {
        if (loggedIn) {
          return <Redirect to="/products" />;
        } else {
          return <Comp {...props} />;
        }
      }}
    />
  );
};

export default GuestOnly;
