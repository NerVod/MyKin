import { Component, Input, OnInit } from '@angular/core';
import { MessagePrive } from '../models/message-prive.model';

@Component({
  selector: 'app-message-prive',
  templateUrl: './message-prive.component.html',
  styleUrls: ['./message-prive.component.scss']
})
export class MessagePriveComponent implements OnInit {

  @Input() messagePrive!: MessagePrive

  constructor() { }

  ngOnInit(): void {

   

  }

}
