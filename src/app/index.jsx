import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

/**
 * Imports GSAP library
 */
require('gsap');

/**
 * Global styles
 */
require('app/assets/css/base.css');

/**
 * Layouts
 */
import Master from 'app/layouts/master/Master';
import Layout from 'app/layouts/Layout';

/**
 * Pages
 */
import Home from 'app/pages/home/Home';
import About from 'app/pages/about/About';
import Contact from 'app/pages/contact/Contact';
import NoMatch from 'app/pages/no-match/NoMatch';

/**
 * The actual node in which the application will be rendered
 */
const app = document.getElementById('app');

/**
 * This history type allows us to use the hash in the url to manage navigation.
 * If we don't want that, we can simply use browserHistory class inside react-router
 * and we need to handle routing also server side or won't be possible to refresh
 * the same page.
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
