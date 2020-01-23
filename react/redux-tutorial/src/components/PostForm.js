import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

export class PostForm extends Component {

  // putting the posts into the state
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    }

    // We call our action for adding a new post
    this.props.createPost(post);
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        // Input fields for submitting a new post
        // The value attribute sets the component state, which contains the values for the fields
        // The name attribute is to correspond the different input fields to their values when onChange occurs
        // We use onSubmit so we can use a post request and add a new post
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label><br />
            <input type="text" name="title" onChange={this.onChange} value={this.state.title} />
          </div>
          <br />
          <div>
            <label>Body: </label><br />
            <textarea name="body" onChange={this.onChange} value={this.state.body}/>
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(PostForm);
