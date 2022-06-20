import { Component, OnInit, Input } from '@angular/core';
import { ContactList } from '../models/contact-list.model';
import { ContactService } from '../services/contact/contact.service';

@Component({
  selector: 'app-single-contact',
  templateUrl: './single-contact.component.html',
  styleUrls: ['./single-contact.component.scss']
})
export class SingleContactComponent implements OnInit {

  
  @Input() contactList!: ContactList;
  
  buttonText!: string;
  invited!: boolean;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.buttonText = 'Inviter';
    this.invited = this.contactList.invited

  }

  onInvite(){
    if(this.contactList.invited === false){
    this.contactService.inviteContactByName(this.contactList.name);
    this.buttonText = 'Invitation envoyée';
    this.invited = true;
    console.log(`Invitation envoyée à ${this.contactList.name}`)
  }
  }

}
