import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from 'data/reducers/reducers';

const devToolExtension = window['devToolsExtension'];

export default createStore(reducers, compose(
    applyMiddleware(thunk, logger()),
    devToolExtension ? devToolExtension() : f => f
));
