import { Component, Input, OnInit } from '@angular/core';
import { MessagePrive } from '../models/message-prive.model';
import { MessagePriveService } from '../services/message-prives.service';

@Component({
  selector: 'app-message-prive',
  templateUrl: './message-prive.component.html',
  styleUrls: ['./message-prive.component.scss']
})
export class MessagePriveComponent implements OnInit {

  @Input() messagePrive!: MessagePrive

  destinataire!: string

  constructor(private messagePriveService: MessagePriveService) { }

  ngOnInit(): void {

   

  }

}
