import { Injectable } from '@angular/core';
import { User } from './User';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  // API Express js
  REST_API: string = "http://localhost:3000/api";

  // http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application.json');

  constructor( private httpClient: HttpClient) { }
}

// Add
AddUser(data: User): Observable<any> {
  let API_URL = `${this.REST_API}/add-user`;
  return this.httpClient.post(API_URL, data)
  .pipe(
    catchError(this.handleError)
  )
}
