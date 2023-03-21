import { Component, Input, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Todo } from 'src/Types/todo';
import { TodosServiceService } from '../todos-service.service';

@Component({
  selector: 'app-deleted',
  templateUrl: './deleted.component.html',
  styleUrls: ['./deleted.component.css']
})
export class DeletedComponent implements OnInit {

  @Input() todo: Todo = {
    id: Guid.create(),
    title : "",
    done : false,
    isFavorite :  false,
    deleted :  false,
  };

  constructor(private _todos: TodosServiceService) {
  }
  ngOnInit(): void {
  }
}
