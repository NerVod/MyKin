import { Component, NgZone, OnInit, Input } from '@angular/core';
import { ContactList } from '../models/contact-list.model';
import { ContactService } from '../services/contact/contact.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

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

  constructor(private contactService: ContactService,private http: HttpClient, private router : Router, private ngZone: NgZone) { }

  ngOnInit(): void {
    this.buttonText = 'Accepter';
    // this.invited = this.contactList.invited;
    this.photoProfile = this.contactList.photoProfile;
    this.user = this.contactList.email;
    this.contactService.getPhotoProfile(`${this.user}`);
  }

  onAccept() {
    console.log('invitation acceptée')
    this.contactService.accepterAmi(this.contactList.email).pipe(
      tap(() => this.ngZone.run(() => this.router.navigateByUrl('/home')) )
    ).subscribe();
    this.buttonText = 'Invitation acceptée';

  }

}
