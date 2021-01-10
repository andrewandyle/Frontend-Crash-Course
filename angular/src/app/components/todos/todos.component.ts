import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo'
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  // using the model Todo that we created
  // will complain if we don't either make it optional or provide initial value
  todos:Todo[] = []

  // used to import services
  constructor(private todoService:TodoService) { }

  // componentDidMount
  // cannot directly assign to this.todos because it's asynchronous
  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos
    })
  }

  // emitted from a todo-item component
  deleteTodo(todo:Todo) {
    // remove from UI
    this.todos = this.todos.filter(t => t.id !== todo.id)
    // remove from server
    this.todoService.deleteTodo(todo).subscribe()
  }

  addTodo(todo:Todo) {
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo)
    })
  }
}
