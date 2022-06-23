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
        name: 'Solo',
        prenom : 'Han',
        photoProfile:'../../assets/images/han-solo.jpg',
        invited: false,
        email:''
      },
      {
        // id: '2',
        name:'Skywalker',
        prenom : 'Luke',
        photoProfile:'../../assets/images/luke.jpg',
        invited: false,
        email:''
      },
      {
        // id: '3',
        name:'Kenobi',
        prenom : 'Obi-Wan',
        photoProfile:'../../assets/images/obiwan.jpg',
        invited: false,
        email:''
      },
      {
        // id: '4',
        name: 'Solo',
        prenom : 'Han',
        photoProfile:'../../assets/images/han-solo.jpg',
        invited: false,
        email:''
      },
      {
        // id: '5',
        name:'Skywalker',
        prenom : 'Luke',
        photoProfile:'../../assets/images/luke.jpg',
        invited: false,
        email:''
      },
      {
        // id: '6',
        name:'Kenobi',
        prenom : 'Obi-Wan',
        photoProfile:'../../assets/images/obiwan.jpg',
        invited: false,
        email:''
      },
    ];
    
  getAllContacts(): Observable<ContactList[]> {
    const user = localStorage['user']
    console.log('user reçu au front :', this.http.get<ContactList[]>(`${environment.baseURL}user/contactslist`))
    return this.http.get<ContactList[]>(`${environment.baseURL}user/contactslist/?name=${user}`)
  }

  getPhotoProfile(account: string) {
    // console.log(`singlecontact component req envoyée pour photoprofile ${environment.baseURL}user/photoprofile/${account}`)
    return this.http.get(`${environment.baseURL}user/photoprofile/${account}`)
  
  }




  getAllContactsHard(){
    return this.contactList
  }

  inviteContact(contactMail: string): Observable<ContactList[]>{
    // console.log('localStorage :',localStorage['user'])
    const inviteur = localStorage['user']
    console.log("Envoi invitation à :", contactMail)
    console.log("URL envoi :", `${environment.baseURL}user/invitecontact/${contactMail}/${inviteur}`)
    
    return this.http.get<ContactList[]>(`${environment.baseURL}user/invitecontact/${contactMail}/${inviteur}`)

  }
  
//   constructor(private http: HttpClient) { }
  
//   contactList: ContactList[] = [];

// getAllContacts(): Observable<ContactList[]> {
//   return this.http.get<ContactList[]>(`${environment.baseURL}user/contactslist`)
// }


}

