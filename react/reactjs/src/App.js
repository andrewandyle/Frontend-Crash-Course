import React, { Component } from 'react';
import Todos from './components/Todos';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed: true
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }

  render() {
    return (
      <div className="App">
        {/* taking todos in our state, passing it to the todos component as a prop */}
        <Todos todos={this.state.todos} />
      </div>
    );
  }

}

export default App;
