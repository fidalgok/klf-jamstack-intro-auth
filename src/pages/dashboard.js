import React from 'react';
import { navigate } from 'gatsby';
import { Router } from '@reach/router';
import IdentityModal from 'react-netlify-identity-widget';
import Layout from '../components/Layout';
import Profile from '../components/Profile';
import PrivateRoute from '../components/PrivateRoute';
import RouteBase from '../components/RouteBase';
import RouteSecret from '../components/RouteSecret';
import RouteLogin from '../components/RouteLogin';

import 'react-netlify-identity-widget/styles.css';

const Dashboard = ({ location }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  React.useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      navigate('/dashboard/login', { replace: true });
    }
  }, [location.pathname]);

  return (
    <Layout>
      <Profile setIsVisible={setIsVisible} />
      <Router>
        <PrivateRoute component={RouteBase} path="/dashboard/base" />
        <PrivateRoute component={RouteSecret} path="/dashboard/secret" />
        <RouteLogin path="/dashboard/login" setIsVisible={setIsVisible} />
      </Router>
      <IdentityModal
        onCloseDialog={() => setIsVisible(false)}
        showDialog={isVisible}
        onLogin={() => setIsVisible(false)}
      />
    </Layout>
  );
};

export default Dashboard;
