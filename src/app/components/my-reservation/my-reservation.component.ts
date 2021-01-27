import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

import { CommandeService } from "../../services/commande.service";
import { AuthService } from '../../services/auth.service';
import { commande } from '../../models/commande';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-my-reservation',
  templateUrl: './my-reservation.component.html',
  styleUrls: ['./my-reservation.component.css']
})
export class MyReservationComponent implements OnInit {

  AllReservations: commande[];
  MyReservations: commande[];
  Reservation: commande;
  Email : string;

  

  constructor(private data : CommandeService,
              private auth : AuthService,
              private flash : FlashMessagesService,
              private router : Router) 
  {
    this.auth.getauth().subscribe(auth => {
      if(auth)
      {
        this.Email = auth.email
      }
      else
      {
        this.Email = null;
      }    
      

    });
  }

  ngOnInit(): void {

 


    this.data.getCommandes().subscribe( reservations => {
      this.AllReservations = reservations;
      let Reserv = this.AllReservations
      .filter(R => R.clientEmail === this.Email);
      this.MyReservations = Reserv;
      });
    
    
    
  }
  
deleteReservation(id :string)
{
  this.data.getCommande(id).subscribe(reservation => {
    this.Reservation = reservation;
  });
  if(confirm('Are You Sure !'))
  {
    this.data.deleteCommande(this.Reservation);
    this.flash.show('Reservation Deleted successfully ;)',{
      cssClass: 'alert-success', timeout : 3000
    });
    this.router.navigate(['/myreservation']);
  }
  
}

}
