import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private auth : AuthService,
              private flash : FlashMessagesService,
              private router: Router) { }

  ngOnInit(): void {
    this.auth.getauth().subscribe(auth => {
      if(auth)
      this.router.navigate(['/']);
    })
  }
  onSubmit()
  {
    this.auth.login(this.email, this.password)
    .then(res => {
      this.flash.show('You are now logged in',{
        cssClass: 'alert-success', timeout:3000
      })
      
      this.router.navigate(['/']);
    })
    .catch(err => {
      this.flash.show(err.message, {
        cssClass:"alert-danger",timeout:3000
      });
    })
  }

}
