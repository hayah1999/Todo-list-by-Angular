import { Component, Input, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Todo } from 'src/Types/todo';
import { TodosServiceService } from '../todos-service.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {

  @Input() todo: Todo = {
    id: Guid.create(),
    title : "",
    done : false,
    isFavorite :  false,
    deleted :  false,
  };

  constructor(private _todos: TodosServiceService) {
  }

  uncheck() {
    this._todos.uncheck(this.todo.id);
  }
  deleteTask() {
    this._todos.deleteTask(this.todo.id);
  }
  ngOnInit(): void {

  }
}
