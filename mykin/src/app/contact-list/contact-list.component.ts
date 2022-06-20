import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactList } from '../models/contact-list.model';
import { ContactService } from '../services/contact/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contactList!: ContactList[];
  contactList$!: Observable<ContactList[]>
  
  constructor(private contactService : ContactService) { }

  ngOnInit(): void {
    this.contactList = this.contactService.getAllContactsHard()
    this.contactList$ = this.contactService.getAllContacts();

  }
  
}
