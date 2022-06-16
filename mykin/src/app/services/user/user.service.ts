import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/services/user/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  createNewUser(donnees: User) {
    return this.http.post(`${environment.baseURL}user/register`, donnees)
  }
  userLogin(donnees: any) {

    return this.http.post(`${environment.baseURL}user/login`, donnees)
  }
  getProtectedData() {
    return this.http.get(`${environment.baseURL}user/logged`)
  }
  getUserData() {
    return this.http.get(`${environment.baseURL}user/user`)
  }


  constructor(private http: HttpClient) { }
}
