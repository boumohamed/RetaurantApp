import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { message } from '../../models/message';
import { MessagesService } from '../../services/messages.service'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages: message[];
  constructor(private data : MessagesService) { }

  ngOnInit(): void {
    this.data.getMessages().subscribe(messages => {
      this.messages = messages; 

      
    });
  }

}
