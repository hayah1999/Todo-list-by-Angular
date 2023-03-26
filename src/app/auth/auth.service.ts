import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogged = new BehaviorSubject(false) ;
  isLogged$ = this.isLogged.asObservable();

  constructor() { }
  change(){
    this.isLogged.next(!this.isLogged.getValue());
    console.log(this.isLogged.getValue());
  }

}
