import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: 'todo', component: TodosComponent},
  {path: 'done', component: TodosComponent},
  {path: 'favorites', component: TodosComponent},
  {path: 'deleted', component: TodosComponent},

  {path: "**", component : NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
