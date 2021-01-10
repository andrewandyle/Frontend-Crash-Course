import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Todo } from '../models/Todo'
import { Observable } from 'rxjs'

// http headers to pass into requests
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos'
  todosLimit = '?_limit=5'

  // to use the http module, inject in constructor
  constructor(private http:HttpClient) { }

  // // get todo data here (hard-coded)
  // getTodos() {
  //   return [{
  //     id: 1,
  //     title: 'Todo One',
  //     completed: false,
  //   },
  //   {
  //     id: 2,
  //     title: 'Todo Two',
  //     completed: false,
  //   },
  //   {
  //     id: 3,
  //     title: 'Todo Three',
  //     completed: true,
  //   }]
  // }

  // make request to JSON placeholder
  getTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`)
  }

  // delete todo
  deleteTodo(todo:Todo):Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`
    return this.http.delete<Todo>(url, httpOptions)
  }

  // add todo
  addTodo(todo:Todo):Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions)
  }

  // toggle completed - put request
  toggleCompleted(todo:Todo):Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`
    return this.http.put(url, todo, httpOptions)
  }
}
