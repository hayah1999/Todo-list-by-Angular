import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Todo } from "../Types/todo";


@Injectable({
  providedIn: 'root'
})
export class TodosServiceService {
  todos: Todo[] = [];
  deleted: Todo[] = [];
  favorites: Todo[] = [];
  done: Todo[] = [];
  constructor() { }

  createTask(title: string) {
    if (!(title == "" || title === " ")) {
      this.todos.push({ id: Guid.create(), title, done: false, isFavorite: false, deleted: false })
      console.log(this.todos)
    }
  }

  deleteTask(id: Guid) {
    let todo: Todo = this.todos.filter((obj: Todo) => obj.id == id)[0];
    todo.deleted = true;
    this.deleted.push(todo);
  }
  check(id: Guid) {
    if (this.todos.length) {
      let todo: Todo = this.todos.filter((obj: Todo) => obj.id == id)[0];
      todo.done = true;
      this.done.push(todo);
    }
  }
  uncheck(id: Guid) {
    if (this.todos.length) {
      let todo: Todo = this.todos.filter((obj: Todo) => obj.id == id)[0];
      todo.done = false;
      this.todos.push(todo);
    }
  }
  favoriteTask(id: Guid) {
    let todo: Todo = this.todos.filter((obj: Todo) => obj.id == id)[0];
    todo.isFavorite = true;
    this.favorites.push(todo);
  }
  isCompleted(): boolean {
    let status: boolean = false;
    if (this.todos.filter((obj: Todo) => obj.done).length) {
      status = true;
    }
    return status;
  }


}
