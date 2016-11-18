import { combineReducers } from 'redux'
import { routeReducers } from 'react-router-redux'

import comments from './comments';
import posts from './posts';

const rootReducer = combineReducers({posts, comments, route: routeReducers});

export default rootReducer;