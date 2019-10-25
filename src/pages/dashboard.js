import React from 'react';
import { navigate } from 'gatsby';
import { Router } from '@reach/router';
import Layout from '../components/Layout';
import Profile from '../components/Profile';
import RouteBase from '../components/RouteBase';
import RouteSecret from '../components/RouteSecret';
import RouteLogin from '../components/RouteLogin';

const Dashboard = ({ location }) => {
  React.useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      navigate('/dashboard/login', { replace: true });
    }
  }, [location.pathname]);

  return (
    <Layout>
      <Profile />
      <Router>
        <RouteBase path="/dashboard/base" />
        <RouteSecret path="/dashboard/secret" />
        <RouteLogin path="/dashboard/login" />
      </Router>
    </Layout>
  );
};

export default Dashboard;
