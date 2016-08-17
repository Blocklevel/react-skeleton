import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import app from './appReducer';
import player from './playerReducer';

export default combineReducers({
    app,
    player,
    routing: routerReducer
});
