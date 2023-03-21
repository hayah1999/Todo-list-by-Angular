import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Guid } from "guid-typescript";
import { Todo } from "../../Types/todo";
import { TodosServiceService } from '../todos-service.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent {
  title: string = "";
  list: Todo[] = [];
  done: Todo[] = [];
  deleted: Todo[] = [];
  favorites: Todo[] = [];
  currentUrl: string;
  constructor(private _todos: TodosServiceService, private _activatedRoute: ActivatedRoute) {
    this.list = this._todos.todos;
    this.done = this._todos.done;
    this.deleted = this._todos.deleted;
    this.favorites = this._todos.favorites;
    this.currentUrl = this._activatedRoute.snapshot.url.toString();
    console.log(this.currentUrl);
  }

  createTask() {
    this._todos.createTask(this.title);
    console.log(this.list)
    this.title = "";
  }

  isCompleted() {
     return this._todos.isCompleted();
  }

}
