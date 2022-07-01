import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/services/user/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

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
  getUserPhoto() {
    const donnees = {user: localStorage['user']}
    return this.http.post(`${environment.baseURL}user/getPhoto`, donnees)
  }

  updateUserPhoto(donnees: any) {
    return this.http.post(`${environment.baseURL}user/updatephoto`, donnees).subscribe()
  }

  hasPhoto() {
    const donnees = {user: localStorage['user']}
    return this.http.post(`${environment.baseURL}user/hasphoto`, donnees)
  }

  deleteAccount(account: string) {
    const donnees = {user: account};
    return this.http.post(`${environment.baseURL}user/deleteaccount`, donnees)
  }


}
