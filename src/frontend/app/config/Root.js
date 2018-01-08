import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DefaultLayout from '../components/DefaultLayout';
import Logo from '../components/Logo';

const Root = () => {
  return (
    <Router>
      <Route path="/" render={() => <DefaultLayout component={Logo} />} />
    </Router>
  );
};

export default Root;
