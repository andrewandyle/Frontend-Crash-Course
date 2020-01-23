// The actions are imported in here
import { FETCH_POSTS, NEW_POST } from './types';

// Each action is a function that we have to export
// Thunk middleware allows us to call dispatch, so we can make asynchronous requests

// This function is exported to our Posts component
export const fetchPosts = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  // dispatch data to the reducer
  // payload is the data going to the reducer
  .then(posts => dispatch({
    type: FETCH_POSTS,
    payload: posts
  }));
};

// takes in postData because we're submitting a post. A single post is our payload
export const createPost = (postData) => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
  .then(res => res.json())
  .then(post => dispatch({
    type: NEW_POST,
    payload: post
  }));
};
