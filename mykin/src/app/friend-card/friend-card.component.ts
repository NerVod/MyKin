import { HttpClient } from '@angular/common/http';
import { Component,NgZone, Input, OnInit } from '@angular/core';
import { ContactList } from '../models/contact-list.model';
import { ContactService } from '../services/contact/contact.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

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
  user!: string;
  friendPrenom!: string;
  friendNom!: string;
  survol!: boolean;

  constructor(private contactService: ContactService,private http: HttpClient,private router : Router, private ngZone: NgZone) { }

  ngOnInit(): void {
    this.user = this.contactList.email;
    this.friendPrenom = this.contactList.prenom
    this.friendNom = this.contactList.name
    this.contactService.getPhotoProfile(`${this.user}`);
  }

  onSeePosts(): void {
    console.log(`voir les posts `)
    localStorage.setItem('ami', this.user);
    localStorage.setItem('PrenomAmi', this.friendPrenom);
    localStorage.setItem('NameAmi', this.friendNom);
    
    this.router.navigateByUrl(`/wallpostfriend/?prenom=${this.friendPrenom}&nom=${this.friendNom}`)
  }


  onSendMessage(): void {
    console.log(`Envoyer un message`)
    localStorage.setItem('ami', this.user);
    localStorage.setItem('PrenomAmi', this.friendPrenom);
    localStorage.setItem('NameAmi', this.friendNom);
    this.router.navigateByUrl(`createmessage`)
  }

  deleteFriend():void {
    if(confirm(`Voulez-vous vraiment supprimer ${this.contactList.prenom} ${this.contactList.name} de votre liste d'amis ?` )) {
      if(confirm(`Cette opération est irréversible, vous devrez de nouveau faire une demande d'ami à ${this.contactList.prenom} ${this.contactList.name}, voulez-vous confirmer ce choix ?`)){
        console.log(` friendCard component TS supression du copain ${this.contactList.prenom} ${this.contactList.name}`);
        this.contactService.deleteFriend(this.contactList.email);
        this.router.navigateByUrl(`/home`)

      }
    }
  }

}
