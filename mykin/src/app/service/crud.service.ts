import { Injectable } from '@angular/core';
import { User } from '../services/user/User';
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
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor( private httpClient: HttpClient) { }
  
  // Add
  AddUser(data :User): Observable<any> {
    let API_URL = `${this.REST_API}/add-user`;
    console.log('adresse register dans crudService',`${this.REST_API}/register`)
    return this.httpClient.post(API_URL, data)
    .pipe(
      catchError(this.handleError)
      )
      
      
    }




    // Error 
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage du handleError: ${error.message}`;
    }
    console.log('message handle error crudservice :',errorMessage);
    return throwError(() => new Error (errorMessage));
    // return throwError(errorMessage);
  }






    
  }