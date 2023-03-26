import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { User } from 'src/Types/user';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {

  }
  myForm: FormGroup;
  isLogged = false;
  user: User | any;

  constructor( private _router: Router, private _auth : AuthService) {
    this._auth.isLogged$.subscribe((res) => {this.isLogged = res;});
    this.myForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  submit() {
    this.user = this.myForm.value;

    console.log(this.user.email)
    let data: any = localStorage.getItem(this.user.email.toString());
    data = JSON.parse(data);
    if (data != null && this.user.email === data.email && this.user.password === data.password) {
      localStorage.setItem("currentUser", JSON.stringify(data));
      this._auth.change();
      this._router.navigate(['/todo']);
    } else {
      alert("This user is not found!")
    }
    console.log(this.isLogged);
    this.myForm.reset();
  }

  navigate() {
    this._router.navigate(['/signup'])
  }
}
