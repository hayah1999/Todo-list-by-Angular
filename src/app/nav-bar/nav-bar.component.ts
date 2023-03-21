import { Component } from '@angular/core';
import { TodosServiceService } from '../todos-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private _todos: TodosServiceService) { }

  getTodosCount() {
    return this._todos.getTodoCount();
  }
  getFavCount() {
    return this._todos.getFavCount();
  }
  getDelCount() {
    return this._todos.getDelCount();
  }
  getDoneCount() {
    let percentage: number =  parseInt(((this._todos.getDoneCount() / this._todos.getTotalCount()) * 100).toFixed(0));
    if(isNaN(percentage)){
      return 0;
    }
    return percentage;
  }
}
