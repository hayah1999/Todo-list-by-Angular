import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '', canActivate:[AuthGuard], children: [
    {path: 'todo', component: TodosComponent},
    {path: 'done', component: TodosComponent},
    {path: 'favorites', component: TodosComponent},
    {path: 'deleted', component: TodosComponent},
  ]},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},

  {path: "**", component : NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
