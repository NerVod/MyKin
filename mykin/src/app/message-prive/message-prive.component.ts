import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessagePrive } from '../models/message-prive.model';
import { MessagePriveService } from '../services/message-prives.service';

@Component({
  selector: 'app-message-prive',
  templateUrl: './message-prive.component.html',
  styleUrls: ['./message-prive.component.scss']
})
export class MessagePriveComponent implements OnInit {

  @Input() messagePrive!: MessagePrive

  destinataire!: string;
  survol!: boolean

  constructor(private messagePriveService: MessagePriveService, private router: Router) { }

  ngOnInit(): void {

   

  }


  deleteMessage() {
    console.log("supression du message")
    if(confirm(`Voulez-vous vraiment supprimer le message de ${this.messagePrive.prenomUser} ${this.messagePrive.nameUser} ?`)) {
      this.messagePriveService.deleteMessage(this.messagePrive._id).subscribe()
      this.router.navigateByUrl('/contact')
    }
  }






}
