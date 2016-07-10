import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import baseStyle from './assets/css/base.css';

import Layout from './pages/Layout';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

const app = document.getElementById('app');

ReactDom.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="about" component={About}></Route>
        <Route path="contact" component={Contact}></Route>
    </Route>
  </Router>,
app);
