import { Component, Input, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Todo } from 'src/Types/todo';
import { TodosServiceService } from '../todos-service.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

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
    this._todos.check(this.todo.id);
  }
  deleteTask() {
    this._todos.deleteTask(this.todo.id);
  }
  ngOnInit(): void {

  }
}
