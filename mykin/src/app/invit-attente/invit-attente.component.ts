import { Component, OnInit, Input } from '@angular/core';
import { ContactList } from '../models/contact-list.model';
import { ContactService } from '../services/contact/contact.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-invit-attente',
  templateUrl: './invit-attente.component.html',
  styleUrls: ['./invit-attente.component.scss']
})
export class InvitAttenteComponent implements OnInit {

  @Input() contactList!: ContactList;

  buttonText!: string;
  // invited!: boolean;
  photoProfile!: any;
  user!: string

  constructor(private contactService: ContactService,private http: HttpClient) { }

  ngOnInit(): void {
    this.buttonText = 'Accepter';
    // this.invited = this.contactList.invited;
    this.photoProfile = this.contactList.photoProfile;
    this.user = this.contactList.email;
    this.contactService.getPhotoProfile(`${this.user}`);
  }

  onAccept() {
    console.log('invitation acceptée')
  }

}
