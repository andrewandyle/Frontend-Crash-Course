import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {

  /* Left off at 38:17 */
  getStyle = () => {
    if(this.props.todo.completed) {
      return {
        textDecoration: 'line-through'
      }
    } else {
      return {
        textDecoration: 'none'
      }
    }
  }

  render() {
    return (
      /* inline styling uses double curly braces */
      <div style={this.getStyle()}>
        <p>{ this.props.todo.title }</p>
      </div>
    )
  }
}

/* Define prop types here
Instead of the array of todos, we just need the object here */
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

/* we could use variables for styles */
/* const itemStyle = {
  backgroundColor: '#f4f4f4'
} */

export default TodoItem
