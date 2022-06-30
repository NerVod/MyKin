import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MessagePrive } from '../models/message-prive.model';
import { MessagePriveService } from '../services/message-prives.service';

@Component({
  selector: 'app-message-prive-list',
  templateUrl: './message-prive-list.component.html',
  styleUrls: ['./message-prive-list.component.scss']
})
export class MessagePriveListComponent implements OnInit {

messagePrives! : MessagePrive[];
messagePrives$! : Observable<MessagePrive[]>
hasMessages$! : any;

  constructor(private messagePriveService: MessagePriveService) { }

  ngOnInit(): void {
    this.messagePrives = this.messagePriveService.getAllMessagesPrivesHard();
    this.messagePrives$ = this.messagePriveService.getUserMessagesPrives();
    this.messagePriveService.hasMessages(localStorage['user']).subscribe((data: Object) => this.hasMessages$= (Object.entries(data)[0][1])) 
  }

}
