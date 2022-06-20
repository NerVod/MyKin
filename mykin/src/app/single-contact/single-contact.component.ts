import { Component, OnInit, Input } from '@angular/core';
import { ContactList } from '../models/contact-list.model';

@Component({
  selector: 'app-single-contact',
  templateUrl: './single-contact.component.html',
  styleUrls: ['./single-contact.component.scss']
})
export class SingleContactComponent implements OnInit {

@Input() contactList!: ContactList

  constructor() { }

  ngOnInit(): void {

  }

  onInvite(){
    console.log(`Invitation envoyée à ${this.contactList.name}`)
  }

}
