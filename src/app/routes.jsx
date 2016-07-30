import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import store, { history } from 'data/store';
import { Provider } from 'react-redux';

/**
 * Layouts
 */
import Master from 'app/layouts/Master';
import Layout from 'app/layouts/Layout';

/**
 * Pages
 */
import Home from 'app/pages/home/Home';
import DataFlow from 'app/pages/data-flow/DataFlow';
import Transitions from 'app/pages/transitions/Transitions';
import NoMatch from 'app/pages/no-match/NoMatch';

/**
 * Routes
 */
const routes = (
    <Provider store={store}>
        <Router history={history}>
            <Route component={Master}>
                <Route path="/" component={Layout}>
                    <IndexRoute component={Home}></IndexRoute>
                    <Route path="data-flow" component={DataFlow}></Route>
                    <Route path="transitions" component={Transitions}></Route>
                </Route>
            </Route>
            <Route path="*" component={NoMatch}></Route>
        </Router>
    </Provider>
);

export default routes;