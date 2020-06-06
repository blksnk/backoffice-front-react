import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './stylesheets/_reset.scss';
import Dashboard from './views/Dashboard.js';

import { initFetch } from './helpers/initFetch.js';

const App = ({ dispatch }) => {
  useEffect(() => {
    initFetch(dispatch);
  }, []);
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Dashboard} />
      </Switch>
    </div>
  );
};

export default connect()(App);
