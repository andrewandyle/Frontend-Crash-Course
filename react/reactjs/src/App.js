import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
// import uuid from 'uuid';
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/todos?_limit=10').then(res => this.setState({ todos: res.data }))
  }

  /* toggle completed for each todo */
  markComplete = (id) => {
    this.setState( { todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })} );
  }

  /* delete todo
  three dots (...) is the spread operator - we have to make a copy of the array and not simply change it*/
  delTodo = (id) => {
    axios.delete('http://jsonplaceholder.typicode.com/todos/${id}')
    .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]}))
  }

  /* add todo */
  addTodo = (title) => {
    /* const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    } */
    axios.post('http://jsonplaceholder.typicode.com/todos', {title, completed: false})
    .then(res => this.setState({ todos: [...this.state.todos, res.data]}))

  }

  render() {
    return (
      <Router>
      <div className="App">
        {/* taking todos in our state, passing it to the todos component as a prop */}
        <div className="container">
          <Header />
          {/* a route in this case represents a page */}
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo}/>
              <Todos todos={this.state.todos}
              markComplete={this.markComplete}
              delTodo={this.delTodo} />
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
        </div>
      </div>
      </Router>
    );
  }

}

export default App;
