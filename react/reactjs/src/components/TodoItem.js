import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {

  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      /* inline styling uses double curly braces */
      <div style={this.getStyle()}>
        <p>
        {/* Passing the id up, up through todos and up into app.js */}
        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
        { title }
        <button onClick={this.props.delTodo.bind(this, id)} style = {btnStyle}>x</button>
        </p>
      </div>
    )
  }
}

/* Define prop types here
Instead of the array of todos, we just need the object here */
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

/* we could use variables for styles */
/* const itemStyle = {
  backgroundColor: '#f4f4f4'
} */

export default TodoItem
