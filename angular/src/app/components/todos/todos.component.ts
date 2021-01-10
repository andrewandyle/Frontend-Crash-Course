import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo'

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
  constructor() { }

  // componentDidMount
  // left off at 34:15 on video
  ngOnInit(): void {
    this.todos = [{
      id: 1,
      title: 'Todo One',
      completed: false,
    },
    {
      id: 2,
      title: 'Todo Two',
      completed: false,
    },
    {
      id: 3,
      title: 'Todo Three',
      completed: true,
    }]
  }

}
