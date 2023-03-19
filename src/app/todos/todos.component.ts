import { Component } from '@angular/core';
import { Guid } from "guid-typescript";
import {Todo} from "../../Types/todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent{ 
  title : string = "";
  list : Todo[] = [];
  createTask(){
    if(!(this.title == "" || this.title === " ")){
    this.list.push({id: Guid.create(), title: this.title, done: false})
    }
    this.title = '';
  }
  deleteTask(index: number){
    this.list.splice(index,1);
  }
  check(index : number){
     if(this.list.length){
         this.list[index].done = true;
     }
  }
  uncheck(index : number){
    if(this.list.length){
        this.list[index].done = false;
    }
 }
 isCompleted() : boolean{
    let status : boolean = false;
    if(this.list.filter((obj: Todo) => obj.done).length){
      status = true;
    }
    return status;
 }
}
