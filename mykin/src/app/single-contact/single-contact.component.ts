import { Component, OnInit, Input } from '@angular/core';
import { ContactList } from '../models/contact-list.model';
import { ContactService } from '../services/contact/contact.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-single-contact',
  templateUrl: './single-contact.component.html',
  styleUrls: ['./single-contact.component.scss']
})
export class SingleContactComponent implements OnInit {

  
  @Input() contactList!: ContactList;
  
  buttonText!: string;
  invited!: any;
  photoProfile!: any;
  user!: string


  constructor(private contactService: ContactService,private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    // this.buttonText = 'Inviter';
    // this.invited = this.contactList.invited;
    this.contactService.isinvited(this.contactList.email).subscribe(data => this.invited =(Object.entries(data)[0][1] ) );
    // this.contactService.isinvited(this.contactList.email).subscribe(data => console.log('retour de isinvited singlecontactcompo ts',this.invited =(Object.entries(data)[0][1] ) ));
    this.buttonStatus()
    this.photoProfile = this.contactList.photoProfile;
    this.user = this.contactList.email;
    this.contactService.getPhotoProfile(`${this.user}`);
   
    
    // console.log('singlecontactcomponent avant sanitize :', this.photoProfile )

  }

  onInvite(){
    if(this.contactList.invited === false){
    this.contactService.inviteContact(this.contactList.email).subscribe();
    this.contactService.updateListeDemandeEnvoyee(this.contactList.email).subscribe()
    this.buttonText = 'Invitation envoyée';
    this.invited = true;
    console.log(`Invitation envoyée à ${this.contactList.name}`)
    }
  }

  buttonStatus(){
    // console.log('this.invited pre timeout', this.invited)
    setTimeout(() => {
      if(this.invited === true){
        this.buttonText = 'invitation envoyée'
        // console.log('this.invited post timeout', this.invited)
      } else {
        this.buttonText = 'Inviter'
      }
      }, 50);
  }


  // getPhotoProfile(){
  //   console.log(`singlecontact component req envoyée pour photoprofile ${environment.baseURL}user/photoprofile/${this.user}`)
  //   return this.http.get(`${environment.baseURL}user/photoprofile/${this.user}`)
  
  // }


}
