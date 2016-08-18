import { applyMiddleware, createStore, compose } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import logger from 'redux-logger';
import reducers from './reducers/reducers';
import promise from 'redux-promise-middleware';

const devToolExtension = window['devToolsExtension'];

/**
 * Add new middleware here!
 * @type {*[]}
 */
let middleware = [
    promise()
];

if (__SYSTEM_LOGS__)
{
    middleware.push(logger());
}

/**
 * Our store
 */
const store = createStore(reducers, compose(
    applyMiddleware(...middleware),
    devToolExtension && __DEV_TOOLS__ ? devToolExtension() : f => f
));

/**
 * Syncing router history with the Redux store
 */
export const history = syncHistoryWithStore(browserHistory, store);

export default store;