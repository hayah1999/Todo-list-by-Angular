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
      let user : any = localStorage.getItem("currentUser");
      user = JSON.parse(user)
      if(user){
        this.todos.push({ id: Guid.create(), title, done: false, isFavorite: false, deleted: false, userId : user.id })
        console.log(this.todos)
      }
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
      let index = this.done.findIndex((obj) => obj.id == id);
      this.done.splice(index,1);
    }
  }
  favoriteTask(id: Guid) {
    let todo: Todo = this.todos.filter((obj: Todo) => obj.id == id)[0];
    todo.isFavorite = true;
    if (!this.favorites.filter((obj: Todo) => obj.id == id)[0]) {
      this.favorites.push(todo);
    }
  }
  unFavorite(id: Guid) {
    if (this.todos.length) {
      let todo: Todo = this.todos.filter((obj: Todo) => obj.id == id)[0];
      todo.isFavorite = false;
      let index = this.favorites.findIndex((obj) => obj.id == id);
      this.favorites.splice(index,1);
    }
  }
  isCompleted(): boolean {
    let status: boolean = false;
    if (this.todos.filter((obj: Todo) => obj.done).length) {
      status = true;
    }
    return status;
  }


  getTodoCount(): number{
    return this.todos.filter((obj : Todo) => !obj.done && !obj.deleted).length;
  }

  getDoneCount(): number{
    return this.todos.filter((obj : Todo) => obj.done && !obj.deleted).length;
  }

  getFavCount(): number{
    return this.todos.filter((obj : Todo) => obj.isFavorite && !obj.deleted).length;
  }

  getDelCount(): number{
    return this.todos.filter((obj : Todo) => obj.deleted).length;
  }
  getTotalCount() : number {
    return  this.todos.filter((obj : Todo) => !obj.deleted).length;
  }

}
