import { Component, OnInit } from '@angular/core';
import { MessagePrive } from '../models/message-prive.model';
import { MessagePriveService } from '../services/message-prives.service';

@Component({
  selector: 'app-message-prive-list',
  templateUrl: './message-prive-list.component.html',
  styleUrls: ['./message-prive-list.component.scss']
})
export class MessagePriveListComponent implements OnInit {

messagePrives! : MessagePrive[]

  constructor(private messagePriveService: MessagePriveService) { }

  ngOnInit(): void {
    this.messagePrives = this.messagePriveService.getAllMessagesPrives();
  }

}
