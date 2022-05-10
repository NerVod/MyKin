import { Component, Input, OnInit } from '@angular/core';
import { MessagePrive } from '../models/message-prive.model';

@Component({
  selector: 'app-message-prive',
  templateUrl: './message-prive.component.html',
  styleUrls: ['./message-prive.component.scss']
})
export class MessagePriveComponent implements OnInit {

  user!: string;
  createdDate!: Date;
  title!: string;
  message!: string;

  constructor() { }

  ngOnInit(): void {

    this.user = 'Utilisateur',
    this.createdDate = new Date(), 
    this.title = 'Titre du message privé',
    this.message= 'Le message privé juste pour toi avec du texte pour voir la card un peu plus grande et concore du texte pour avoir une card encore plus grande'

  }

}
