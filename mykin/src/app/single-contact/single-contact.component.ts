import { Component, OnInit, Input } from '@angular/core';
import { ContactList } from '../models/contact-list.model';

@Component({
  selector: 'app-single-contact',
  templateUrl: './single-contact.component.html',
  styleUrls: ['./single-contact.component.scss']
})
export class SingleContactComponent implements OnInit {

  
  @Input() contactList!: ContactList;
  
  invited: boolean = false;
  buttonText!: string;

  constructor() { }

  ngOnInit(): void {
    this.buttonText = 'Inviter'

  }

  onInvite(){
    if(this.invited === false){
    this.invited= true
    this.buttonText = 'Invitation envoyée'
    console.log(`Invitation envoyée à ${this.contactList.name}`)
  }
  }

}
