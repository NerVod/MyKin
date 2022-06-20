import { Component, OnInit } from '@angular/core';
import { ContactList } from '../models/contact-list.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  singleContact!: ContactList;
  secondContact!: ContactList;
  troisiemeContact!: ContactList

  constructor() { }

  ngOnInit(): void {
    this.singleContact ={
     name: 'Han Solo',
      photoProfile:'../../assets/images/han-solo.jpg'
    },
    this.secondContact = {
      name:'Luke Skywalker',
      photoProfile:'../../assets/images/luke.jpg'
    },
    this.troisiemeContact = {
      name:'Obi Wan',
      photoProfile:'../../assets/images/obiwan.jpg'
    }
  }

}
