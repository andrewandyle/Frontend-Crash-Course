// This is the file for our root reducer, which we bring into our store

import { combineReducers } from 'redux';
import postReducer from './postReducer';

// We use a Redux function to combine our reducers into the root reducer
// Pass in an object with the reducers
export default combineReducers({
  posts: postReducer
})
