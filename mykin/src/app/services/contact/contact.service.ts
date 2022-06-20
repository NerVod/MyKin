import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactList } from 'src/app/models/contact-list.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) {}

      contactList = [
      {
        // id: '1',
        name: 'Han Solo',
        photoProfile:'../../assets/images/han-solo.jpg',
        invited: false
      },
      {
        // id: '2',
        name:'Luke Skywalker',
        photoProfile:'../../assets/images/luke.jpg',
        invited: false
      },
      {
        // id: '3',
        name:'Obi Wan',
        photoProfile:'../../assets/images/obiwan.jpg',
        invited: false
      },
      {
        // id: '4',
        name: 'Han Solo',
        photoProfile:'../../assets/images/han-solo.jpg',
        invited: false
      },
      {
        // id: '5',
        name:'Luke Skywalker',
        photoProfile:'../../assets/images/luke.jpg',
        invited: false
      },
      {
        // id: '6',
        name:'Obi Wan',
        photoProfile:'../../assets/images/obiwan.jpg',
        invited: false
      },
    ];
    
  getAllContacts(): Observable<ContactList[]> {
    console.log('user reçu au front :', this.http.get<ContactList[]>(`${environment.baseURL}user/contactslist`))
    return this.http.get<ContactList[]>(`${environment.baseURL}user/contactslist`)
  }

  getAllContactsHard(){
    return this.contactList
  }

  inviteContactByName(contactName: string): void{
    const contact = this.contactList.find(contact => contact.name === contactName);
    if(contact) {
      contact.invited = true
    } else {
      throw new Error('contact introuvable');
    }
  }
  
//   constructor(private http: HttpClient) { }
  
//   contactList: ContactList[] = [];

// getAllContacts(): Observable<ContactList[]> {
//   return this.http.get<ContactList[]>(`${environment.baseURL}user/contactslist`)
// }


}

