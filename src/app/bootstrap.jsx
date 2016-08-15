import React from 'react';
import ReactDom from 'react-dom';
import routes from './routes';
import store, { history } from '../store/store';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

/**
 * Imports GSAP library
 */
require('gsap');

/**
 * Global styles
 */
require('app/assets/css/base.css');

/**
 * Application initialization
 * Whoop! Whoop!
 */
ReactDom.render(
    <Provider store={store}>
        <Router history={history}>{routes}</Router>
    </Provider>,
document.getElementById('app'));