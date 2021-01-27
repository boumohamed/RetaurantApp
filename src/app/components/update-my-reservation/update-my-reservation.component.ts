import { Component, OnInit } from '@angular/core';
import { commande } from '../../models/commande';
import { CommandeService } from '../../services/commande.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import {formatDate} from '@angular/common';


@Component({
  selector: 'app-update-my-reservation',
  templateUrl: './update-my-reservation.component.html',
  styleUrls: ['./update-my-reservation.component.css']
})
export class UpdateMyReservationComponent implements OnInit {

  commande : commande;
  id : string;

  sysDateDepart : string;
  sysDateEnd : string;
  Date2 : Date = new Date();

  constructor(private data : CommandeService,
              private rout : ActivatedRoute,
              private flash : FlashMessagesService,
              private router : Router) 
  {
    this.id = this.rout.snapshot.params['id'];
    this.data.getCommande(this.id).subscribe(reservation => {
      this.commande = reservation;
    })
   }

  ngOnInit(): void {
    this.sysDateDepart = formatDate(new Date(), 'yyyy-MM-dd', 'en');
    this.Date2.setDate( this.Date2.getDate() + 5 );
    this.sysDateEnd = formatDate(this.Date2, 'yyyy-MM-dd', 'en');
  }

  onSubmit({value, valid}: {value: commande, valid: boolean})
  {
    if(valid)
    {
      
      this.data.updateCommande(this.commande);
      this.flash.show('Reservation Updated ;) ',{
        cssClass: 'alert-success', timeout:3000
      });
      this.router.navigate(['/myreservation']);
    }
    else
    {
      this.flash.show('Please fill out the form correctly ! ',{
        cssClass: 'alert-danger', timeout:3000
      });
    }
  }

}
