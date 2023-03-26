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
    userId : Guid.create()
  };

  constructor(private _todos: TodosServiceService) {
  }
  unFavorite(){
    this._todos.unFavorite(this.todo.id)
  }
  ngOnInit(): void {

  }
}
