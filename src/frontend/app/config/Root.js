import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Theme from '../components/Theme';

const Root = () => {
  return (
    <Router>
      <Route path="/" component={Theme} />
    </Router>
  );
};

export default Root;
