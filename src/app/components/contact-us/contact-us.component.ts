import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../services/messages.service'
import { message } from '../../models/message';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  msg: message =
  { 
    firstName: '',
    lastName: '',
    email: '',
    body: ''
  };

  notOK: boolean = true;
  constructor(private  data : MessagesService,
              private router: Router, 
              private flash : FlashMessagesService) { }

  ngOnInit(): void {
  }
  onSubmit({value, valid}: {value: message, valid: boolean})
  {
    if(valid)
    {
      this.msg.date = formatDate(new Date(), 'yyyy-MM-dd', 'en');
      this.msg.houre = formatDate(new Date(), 'HH:mm:ss', 'en');
      this.data.newMessage(this.msg);
      this.flash.show('Message Sent :) ',{
        cssClass: 'alert-success', timeout:3000
      });
      this.router.navigate(['/']);
    }
    else
    {
      this.flash.show('Please fill out the form correctly',{
        cssClass: 'alert-danger', timeout:3000
      });
    }

  }
}
