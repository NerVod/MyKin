import { Component, Input, OnInit } from '@angular/core';
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

  getProtectedData() {
    this.userService.getProtectedData().subscribe((data: any) => console.log('user data :',data))
  };

  getUserData() {
    this.userService.getUserData().subscribe((data: any) => console.log('data du user :', data))
  }

  ngOnInit(): void {
    // this.getProtectedData()
    // this._User$ = this.userService.getUserData().subscribe((data: any) => console.log('data du user :', data.user))
    this._User$ = this.userService.getUserData().pipe(
      map(value => value = Object.entries(value)),
      map(value => value = value[0][1]['name'])
    )
    // console.log('user homecomponent.ts :', this._User['user'])
  }

}
