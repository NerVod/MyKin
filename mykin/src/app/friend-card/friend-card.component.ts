import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ContactList } from '../models/contact-list.model';
import { ContactService } from '../services/contact/contact.service';

@Component({
  selector: 'app-friend-card',
  templateUrl: './friend-card.component.html',
  styleUrls: ['./friend-card.component.scss']
})
export class FriendCardComponent implements OnInit {

  @Input() contactList!: ContactList;

  buttonText!: string;
  // invited!: any;
  photoProfile!: any;
  user!: string

  constructor(private contactService: ContactService,private http: HttpClient) { }

  ngOnInit(): void {
    this.user = this.contactList.email;
    this.contactService.getPhotoProfile(`${this.user}`);
  }

  onSeeProfile(): void {
    console.log(`voir le profile`)
  }


  onSendMessage(): void {
    console.log(`Envoyer un message`)
  }

}
