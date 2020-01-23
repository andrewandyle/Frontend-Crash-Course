// Definition of reducer: pure functions that specify how the application state should change in response to an action
// Reducers respond with the new state, recreated (not modified), which is sent down to components which react accordingly
// This reducer will evaluate any actions that are committed (like fetching posts and creating a new post)

// The actions are imported in here
import { FETCH_POSTS, NEW_POST } from '../actions/types';

// items represents the posts that we fetch. item represents the single post that we add.
const initialState = {
  items: [],
  item: {}
};

// Export a function that evaluates what type of action we're dealing with; takes in the state and the action
export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_POSTS:
      return {
        // return current state using the spread operator
        ...state,
        // add payload (data) onto items
        items: action.payload
      };
    case NEW_POST:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
