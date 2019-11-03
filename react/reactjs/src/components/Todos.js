import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    /* console.log(this.props.todos)
    this is our array that comes from the state of the App.js
    we pass it down as props, we can access it here */
    return this.props.todos.map((todo) => (
      /* for each todo that we map through, what jsx do we want to display?
      <h3>{ todo.title }</h3> - if we want to simply print the title of each todo */
      <TodoItem key={todo.id} todo={todo} />

    ));
  }
}

/* Define prop types here
Prop types - validation for properties that a component should have - we can set the type and set them to be required or not */
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
