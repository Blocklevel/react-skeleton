import React from 'react';
import ReactDom from 'react-dom';
import App from 'components/app';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Layout from './pages/Layout';
import Home from './pages/Home';

const app = document.getElementById('app');

ReactDom.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
    </Route>
  </Router>,
app);
