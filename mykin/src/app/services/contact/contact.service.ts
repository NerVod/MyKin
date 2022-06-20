import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactList } from 'src/app/models/contact-list.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  
  constructor(private http: HttpClient) { }
  
  contactlist: ContactList[] = [];

getAllContacts(): Observable<ContactList[]> {
  return this.http.get<ContactList[]>(`${environment.baseURL}user/contactslist`)
}


}

