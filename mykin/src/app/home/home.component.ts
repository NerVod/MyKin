import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { map,tap,  Observable } from 'rxjs';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  photoUrl!: string
  http: any;

  constructor(private userService: UserService, private router: Router) { }

_Nom$!:Observable<any>;
_Prenom$!:Observable<any>;
_Email$!: Observable<any>;
_PhotoProfile$!: Observable<any>;


  getProtectedData() {
    this.userService.getProtectedData().subscribe((data: any) => console.log('user data :',data))
  };

  getUserData() {
    this.userService.getUserData().subscribe((data: any) => console.log('data du user :', data))
  }

  ngOnInit(): void {

    this._Nom$= this.getName();
    this._Prenom$= this.getPrenom();
    this._Email$ = this.getEmail();
    // this._PhotoProfile$ = this.getPhoto();

  }

  onSubmitPhoto(): void {
    console.log(this.photoUrl)
    const donnees= {
      photoUrl: this.photoUrl,
      user: localStorage['user'] 
    }
    this.userService.updateUserPhoto(donnees)
    
  }


  getName() {
    this._Nom$ = this.userService.getUserData().pipe(
      tap(value => console.log('value getName',value)),
      map(value => value = Object.entries(value)),
      tap(value =>localStorage.setItem('name', value[0][1]['name'] )),
      map(value => value = value[0][1]['name']),
      )
      return this._Nom$
  }

  getPrenom() {
    this._Prenom$ = this.userService.getUserData().pipe(
      map(value => value = Object.entries(value)),
      tap(value =>localStorage.setItem('prenom', value[0][1]['prenom'] )),
      map(value => value = value[0][1]['prenom']),
      )
      return this._Prenom$
  }

  getEmail() {
    this._Email$ = this.userService.getUserData().pipe(
      map(value => value = Object.entries(value)),
      map(value => value = value[0][1]['email']),
      )
      return this._Email$
  }

  getPhoto() {
    this._PhotoProfile$  = this.userService.getUserPhoto().pipe(
      tap(value => console.log('value getName',value)),
      map(value => value = Object.entries(value)),
      map(value => value = value[0][1]['photoProfile']),
      )
      return this._PhotoProfile$ 
  }

  onAddNewPost(): void {
    this.router.navigateByUrl('/createpost')
  }
 

}
