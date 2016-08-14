import React from 'react';
import { Route, IndexRoute } from 'react-router';

/**
 * Layouts
 */
import Master from 'app/layouts/master/Master';
import Layout from 'app/layouts/layout/Layout';

/**
 * Pages
 */
import Index from 'app/pages/index/Index';
import NoMatch from 'app/pages/no-match/NoMatch';

/**
 * Routes
 */
const routes = (
    <Route component={Master}>
        <Route path="/" nav={true} component={Layout}>
            <IndexRoute component={Index}></IndexRoute>
        </Route>
        <Route path="*" component={NoMatch}></Route>
    </Route>
);

export default routes;