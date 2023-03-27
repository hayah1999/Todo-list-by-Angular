import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { TodosServiceService } from '../todos-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  isLogged = true;
  username: string = "";
  constructor(private _todos: TodosServiceService, private _auth: AuthService, private _router : Router ) {
    this._auth.isLogged$.subscribe((res) => this.isLogged = res);
  }

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
    let percentage: number = parseInt(((this._todos.getDoneCount() / this._todos.getTotalCount()) * 100).toFixed(0));
    if (isNaN(percentage)) {
      return 0;
    }
    return percentage;
  }
  logOut() {
    this._auth.change();
    localStorage.removeItem("currentUser");
    this._router.navigate(['/login']);
  }
  getCurrentUser() {
    let user: any = localStorage.getItem("currentUser");
    user = JSON.parse(user);
    if (user) {
      this.username = user.username;
    }
    return this.username;
  }
}
