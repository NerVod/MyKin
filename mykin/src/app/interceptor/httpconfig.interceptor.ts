import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class HttpConfigInterceptor implements HttpConfigInterceptor {
    constructor() {}
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        // Récupération du token dans localstorage
        const authToken = localStorage.getItem('Token');
        //clone la req et remplace les headers avec les headers clonés à jour avec l'authorization
        const authReq = req.clone({
            headers: req.headers.set('Authorization', authToken!)
        });
        // envoi la requête clonée avec les headers au prochain next middleware
        return next.handle(authReq); 
    }

}