import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import { Logger } from '../../services/logger.service';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [];
  constructor(private logger: Logger) {}

  loggerTodo() {
    this.logger.logger(this.todos);
  }
  getTodos(): Todo[] {
    return this.todos;
  }
  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
}
