import { Component, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/Types/todo';
import { Router } from '@angular/router';
import { TodosServiceService } from "../todos-service.service";
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo = {
    id: Guid.create(),
    title : "",
    done : false,
    isFavorite :  false,
    deleted :  false,
  };

  constructor(private _todos: TodosServiceService) {
  }

  check() {
    this._todos.check(this.todo.id);
  }
  deleteTask() {
    this._todos.deleteTask(this.todo.id);
  }
  favoriteTask(){
    this._todos.favoriteTask(this.todo.id);
  }
  ngOnInit(): void {

  }

}
