import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';

import Posts from './components/Posts';
import PostForm from './components/PostForm';

import store from './store';

function App() {
  return (
    // Provider is a React component that acts as the glue for React and Redux
    // We need to wrap everything within a Provider component
    // The Provider takes a store which holds the state
    // We made the store elsewhere (store.js) and imported it into this component
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          // This is the component where we can compose and submit a new post
          <PostForm />
          <hr />
          // This is the component that contains all the posts and displays them in a list
          <Posts />
        </header>
      </div>
    </Provider>
  );
}

export default App;
