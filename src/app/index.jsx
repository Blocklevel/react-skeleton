import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, useRouterHistory, browserHistory } from 'react-router';
import { createHashHistory } from 'history';
import store from 'data/store';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux'

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
 * If you don't want that, simply use this :
 *
 * 	@example
 * 	const history = syncHistoryWithStore(browserHistory, store);
 *
 * With this setup we need to handle routing also server side or won't be possible to refresh
 * the same page.
 */
const hashHistory = useRouterHistory(createHashHistory)({ queryKey: false });
const history = syncHistoryWithStore(browserHistory, store);

/**
 * Routing and app render
 */
ReactDom.render(
	<Provider store={store}>
		<Router history={history}>
			<Route component={Master}>
				<Route path="/" component={Layout}>
					<IndexRoute component={Home} />
					<Route path="about" component={About} />
					<Route path="contact" component={Contact}/>
					<Route path="*" component={NoMatch} />
				</Route>
			</Route>
		</Router>
	</Provider>,
app);
