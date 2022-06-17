import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService) { }

_User$!:Observable<any>;
_Email$! : Observable<any>;


  getProtectedData() {
    this.userService.getProtectedData().subscribe((data: any) => console.log('user data :',data))
  };

  getUserData() {
    this.userService.getUserData().subscribe((data: any) => console.log('data du user :', data))
  }

  ngOnInit(): void {
    // this.getProtectedData()
    // this._User$ = this.userService.getUserData().subscribe((data: any) => console.log('data du user :', data.user))

    this._User$= this.getName();
    this._Email$ = this.getEmail()
    // console.log('user homecomponent.ts :', this._User['user'])
  }

  getName() {
    this._User$ = this.userService.getUserData().pipe(
      map(value => value = Object.entries(value)),
      map(value => value = value[0][1]['name']),
      )
      return this._User$
  }
  getEmail() {
    this._Email$ = this.userService.getUserData().pipe(
      map(value => value = Object.entries(value)),
      map(value => value = value[0][1]['email']),
      )
      return this._Email$
  }

}
