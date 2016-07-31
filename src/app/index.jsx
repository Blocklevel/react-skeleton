import React from 'react';
import ReactDom from 'react-dom';
import routes from './routes';

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
ReactDom.render(routes, document.getElementById('app'));
