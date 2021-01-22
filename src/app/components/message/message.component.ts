import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { MessagesService } from '../../services/messages.service';
import { message } from '../../models/message';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  id: string;
  msg : message;
  constructor(private data : MessagesService,
              private rout : ActivatedRoute,
              private flash: FlashMessagesService,
              private router : Router) {
    
   }

  ngOnInit(): void {
    this.id = this.rout.snapshot.params['id'];
    
    this.data.getMessage(this.id).subscribe( message => {
      this.msg = message;

      });
  }
  deleteMessage()
  {
    if(confirm('Are you Sure ?'))
      {
         
          this.data.deleteMessage(this.msg);
          this.flash.show("Message Deleted !", {
            cssClass: 'alert-success', timeout: 3000
          });
          this.router.navigate(['/messages']);
          
      }
    this.data.deleteMessage(this.msg);
  }

}
