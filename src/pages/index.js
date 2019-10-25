import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const Index = () => (
  <Layout>
    <h1>Jamstack Auth Demo</h1>
    <p>Log in to check it out!</p>
    <Link to="/dashboard">Go to the dashboard</Link>
  </Layout>
);

export default Index;
