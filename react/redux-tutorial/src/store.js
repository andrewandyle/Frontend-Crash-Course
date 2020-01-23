// Definition of store: includes state and sends state down to other components

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

// createStore requires the initial state
const initialState = {};

// redux-thunk is middleware for Redux, which allows us to directly access the dispatch method
const middleware = [thunk];

// createStore takes in 3 parameters
const store = createStore(
  // root reducer is the combination of all other reducers based on resources (in this case, we have a post reducer)
  rootReducer,
  initialState,
  // enhancer functions that you want to include, third party capabilities such as Redux Chrome extension
  // we need to use compose because we want multiple enhancers
  compose(
    applyMiddleware(...middleware),
    // Redux DevTools - a Google Chrome extension
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
