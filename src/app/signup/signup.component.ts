import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { User } from 'src/Types/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  user: User | any;

  constructor(private _router: Router) { }

  submit(form: NgForm) {
    this.user = form.value;
    this.user.id = Guid.create();
    localStorage.setItem(this.user.email.toString(), JSON.stringify(this.user));
    this._router.navigate(['/login']);
    form.reset();
  }

  navigate() {
    this._router.navigate(['/login']);
  }
}
