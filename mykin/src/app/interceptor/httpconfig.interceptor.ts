
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HttpConfigInterceptor implements HttpInterceptor {
    constructor() {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Obtenir le Token du localStorage
        let authToken
        if(localStorage.getItem('Token') != null){
            authToken = localStorage.getItem('Token');
        }
        // Clone la requete et remplace les headers avec l'authorization
        req = req.clone({
            setHeaders: { Authorization: `Bearer ${authToken}`}
        });
    
        // send cloned request with header to the next handler.
        return next.handle(req);
    }
}