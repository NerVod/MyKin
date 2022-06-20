import { Component, OnInit } from '@angular/core';
import { ContactList } from '../models/contact-list.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactList!: ContactList[];

  constructor() { }

  ngOnInit(): void {
this.contactList = [
  {
    name: 'Han Solo',
    photoProfile:'../../assets/images/han-solo.jpg'
  },
  {
    name:'Luke Skywalker',
    photoProfile:'../../assets/images/luke.jpg'
  },
  {
    name:'Obi Wan',
    photoProfile:'../../assets/images/obiwan.jpg'
  },
  {
    name: 'Han Solo',
    photoProfile:'../../assets/images/han-solo.jpg'
  },
  {
    name:'Luke Skywalker',
    photoProfile:'../../assets/images/luke.jpg'
  },
  {
    name:'Obi Wan',
    photoProfile:'../../assets/images/obiwan.jpg'
  },
]

  }

}
