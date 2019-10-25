import React from 'react';
import { navigate } from 'gatsby';
import { useIdentityContext } from 'react-netlify-identity';

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const identity = useIdentityContext();
  const isLoggedIn = identity && identity.isLoggedIn;

  if (!isLoggedIn && location.pathname !== '/dashboard/login') {
    // not logged in, you shouldn't get past this behind the dashboard routes
    navigate('/dashboard/login', { replace: true });
    return null;
  }
  // logged in, you may proceed
  return <Component {...rest} />;
};

export default PrivateRoute;
