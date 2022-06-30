import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  interval, map, Observable, take, tap } from 'rxjs';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isLogged$!: Observable<boolean>;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    // this.isLogged$ = this.userService.getUserData().pipe(
    //   map(value => value = Object.entries(value) !== undefined ? true : false),
    //   tap(Boolean => console.log('boolean loggué ? :', Boolean))
    // )

  }


  getUserData() {
    this.userService.getUserData().subscribe((data: any) => console.log('data du user :', data))
  }

  logout() {
    localStorage.removeItem('Token');
    localStorage.removeItem('user');
    localStorage.removeItem('isLogged');
    localStorage.removeItem('name');
    localStorage.removeItem('prenom');
    // this.isLogged$ = this.userService.getUserData().pipe(
    //   map(value => value = Object.entries(value) !== undefined ? true : false),
    //   tap(Boolean => console.log('boolean déloggué ? :', Boolean))
    //   )
    this.router.navigateByUrl('/login')
  }

}
