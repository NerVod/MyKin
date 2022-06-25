import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactList } from '../models/contact-list.model';
import { ContactService } from '../services/contact/contact.service';

@Component({
  selector: 'app-invite-attente-liste',
  templateUrl: './invite-attente-liste.component.html',
  styleUrls: ['./invite-attente-liste.component.scss']
})
export class InviteAttenteListeComponent implements OnInit {

  contactList!: ContactList[];
  contactList$!: Observable<ContactList[]>

  constructor(private contactService : ContactService) { }

  ngOnInit(): void {
    this.contactList = this.contactService.getAllContactsHard()
    this.contactList$ = this.contactService.getInvitEnAttente()
    
  }

}
