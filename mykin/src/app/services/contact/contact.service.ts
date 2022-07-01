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
    const user = {user :localStorage['user']};
    return this.http.post<ContactList[]>(`${environment.baseURL}user/contactslist/`, user)
  }

  getPhotoProfile(account: string) {
    // console.log(`singlecontact component req envoyée pour photoprofile ${environment.baseURL}user/photoprofile/${account}`)
    return this.http.get(`${environment.baseURL}user/photoprofile/${account}`)
  }




  getAllContactsHard(){
    return this.contactList
  }

  inviteContact(contactMail: string): Observable<ContactList[]>{
    const donnees = { contactMail: contactMail, inviteur: localStorage['user']}
    return this.http.post<ContactList[]>(`${environment.baseURL}user/invitecontact`, donnees)
  }

  updateListeDemandeEnvoyee(contactMail: string): Observable<ContactList[]>{
    const donnees = { contactMail: contactMail, inviteur: localStorage['user']}
    return this.http.post<ContactList[]>(`${environment.baseURL}user/updatedemandeenvoyee`, donnees)
  }

  isinvited(contactMail: string){
    const donnees = { contactMail: contactMail, inviteur : localStorage['user']}  
    return this.http.post(`${environment.baseURL}user/isinvited`, donnees)
  }

  getInvitEnAttente(){
    const donnees = { inviteur : localStorage['user']};
    return this.http.post<ContactList[]>(`${environment.baseURL}user/getinvitattente`, donnees)
  }
  
  accepterAmi(contactMail: string){
    const donnees = {contactMail: contactMail, accepteur: localStorage['user']};
    return this.http.post<ContactList[]>(`${environment.baseURL}user/accepterami`, donnees)

  }

  hasPendingInvites(){
    const donnees = { inviteur: localStorage['user']}
    return this.http.post(`${environment.baseURL}user/pendinginvit`, donnees)
  }

  getAllFriends(): Observable<ContactList[]> {
    const donnees = { inviteur: localStorage['user']};
    return this.http.post<ContactList[]>(`${environment.baseURL}user/getallfriends`, donnees)
  }
  
  deleteFriend(contactMail: string){
    console.log(`supression de ${contactMail}`)
    const donnees = {user: localStorage['user'], deletedUser: contactMail}
    return this.http.post(`${environment.baseURL}user/deletefriend/`, donnees).subscribe()
  }

  hasFriends(){
    const donnees = {user : localStorage['user']};
    return this.http.post(`${environment.baseURL}user/hasfriends/`, donnees)
  }


}

