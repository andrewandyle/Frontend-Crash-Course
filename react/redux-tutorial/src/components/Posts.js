import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

export class Posts extends Component {

  // this function runs right away when the component mounts
  componentWillMount() {
    // the action for fetching posts becomes a prop
    this.props.fetchPosts();
  }

  // lifecycle method that runs when component receives a new property from the state
  // we use unshift to add the new post to the beginning of the list
  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    // this map function, with JSX, represents how each post is displayed
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        // display all of the posts
        <h1>Posts</h1>
        {postItems}
      </div>
    )
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
}

// function that gets the new items from the state from Redux and maps it to this component's props
// posts is the name we used for the postReducer
const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
})

// connect connects the components to the Redux store provided by Provider
// first set of parentheses has the function to map our state to props and the action,
// second set has the component
export default connect(mapStateToProps, { fetchPosts })(Posts);
