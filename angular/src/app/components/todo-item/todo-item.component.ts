import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  // the iterations passed in ([todo]) have to be an Input
  @Input() todo: Todo = new Todo
  // emit to parent component
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter()

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  // set dynamic classes
  setClasses() {
    let classes = {
      todo: true,
      // Apply is-completed class if todo is completed
      // Can't have todo optional here, it could be undefined
      'is-complete': this.todo.completed
    }
    return classes
  }

  onToggle(todo:Todo) {
    // toggle in UI
    todo.completed = !todo.completed
    // toggle on server
    this.todoService.toggleCompleted(todo).subscribe(todo => {
      console.log(todo)
    })
  }

  // emit to parent component
  // we need to do this to delete from both the UI and server
  onDelete(todo:Todo) {
    this.deleteTodo.emit(todo)
  }

}
