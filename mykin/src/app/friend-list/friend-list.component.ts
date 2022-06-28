import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactList } from '../models/contact-list.model';
import { ContactService } from '../services/contact/contact.service';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.scss']
})
export class FriendListComponent implements OnInit {
  
  contactList!: ContactList[];
  contactList$!: Observable<ContactList[]>

  constructor(private contactService : ContactService) { }

  ngOnInit(): void {
    this.contactList = this.contactService.getAllContactsHard();
    this.contactList$ = this.contactService.getAllFriends()


  }
}
