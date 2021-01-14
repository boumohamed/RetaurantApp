import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Logged :boolean;
  constructor(private auth : AuthService) { }

  ngOnInit(): void {
    this.auth.getauth().subscribe(auth => {
      if(auth.email == 'mb.bouzri@gmail.com')
        this.Logged = true;
        else
          this.Logged = false;
    })
  }

}
