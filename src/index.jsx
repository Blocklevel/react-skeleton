import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

/**
 * Layouts
 */
import Master from './layouts/Master/Master';
import Layout from './layouts/Layout/Layout';

/**
 * Pages
 */
import Home from 'pages/Home/Home';
import About from 'pages/About/About';
import Contact from 'pages/Contact/Contact';
import NoMatch from 'pages/NoMatch/NoMatch';

/**
 * The actual node in which the application will be rendered
 */
const app = document.getElementById('app');

/**
 * Create the history object removing the query strings
 */
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

/**
 * Routing and app render
 */
ReactDom.render(
	<Router history={appHistory}>
		<Route component={Master}>
			<Route path="/" component={Layout}>
				<IndexRoute component={Home} />
				<Route path="about" component={About} />
				<Route path="contact" component={Contact}/>
				<Route path="*" component={NoMatch} />
			</Route>
		</Route>
	</Router>,
app);
