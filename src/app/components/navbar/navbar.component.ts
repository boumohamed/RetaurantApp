import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  Logged :boolean;
  user: string;

  constructor(private auth : AuthService,
              private flash : FlashMessagesService,
              private router: Router) { }

  ngOnInit(): void {
    this.auth.getauth().subscribe(auth => {
      if(auth)
      {
        this.Logged = true;
        this.user = auth.email;
      }
       
        else
          this.Logged = false;
    })
  }
  onLogout()
  {
    this.auth.logout();
    this.flash.show('You are now logged out ',{
      cssClass: 'alert-success', timeout:3000
  });
  this.Logged = false;
  this.router.navigate(['/login']);
}


}
