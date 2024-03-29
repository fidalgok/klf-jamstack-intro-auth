import React from 'react';
import { useIdentityContext } from 'react-netlify-identity';
import { navigate } from 'gatsby';

const RouteLogin = ({ setIsVisible }) => {
  const identity = useIdentityContext();

  if (identity && identity.isLoggedIn) {
    navigate('/dashboard/secret', { replace: true });
  }
  return (
    <>
      <h1>Log In or Sign Up</h1>
      <button type="button" onClick={() => setIsVisible(true)}>
        Log In
      </button>
    </>
  );
};

export default RouteLogin;
