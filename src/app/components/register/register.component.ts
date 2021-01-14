import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string;
  password1: string;
  password2: string;
  
  constructor(private auth : AuthService,
              private flash : FlashMessagesService,
              private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    this.auth.addAdmin(this.email, this.password1)
    .then(res => {
      this.flash.show('Ok',{
        cssClass: 'alert-success', timeout:4000
      })
    });
    this.router.navigate(['/']);
  }
}
