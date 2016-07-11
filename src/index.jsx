import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

/**
 * Global styles
 */
import baseStyle from './assets/css/base.css';

/**
 * Components
 */
import Layout from './pages/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

/**
 * The actual node in which the application will be rendered
 */
const app = document.getElementById('app');

/**
 * Routing and app render
 */
ReactDom.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="about" component={About}></Route>
        <Route path="contact" component={Contact}></Route>
    </Route>
  </Router>,
app);
