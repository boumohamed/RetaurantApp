import { Component, OnInit } from '@angular/core';
import { commande } from '../../models/commande';
import { item } from '../../models/item';

import { FlashMessagesService } from 'angular2-flash-messages';
import { CommandeService } from '../../services/commande.service';
import {formatDate} from '@angular/common';
import { AuthService } from '../../services/auth.service';

import { ItemsServiceService} from '../../services/items-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-commande',
  templateUrl: './add-commande.component.html',
  styleUrls: ['./add-commande.component.css']
})
export class AddCommandeComponent implements OnInit {


  Logged: boolean = false;
sysDateDepart : string;
sysDateEnd : string;
Date2 : Date = new Date();
commande : commande = 
{
   
    name: '',
    dateOfCommande: '',
    clientFirstName: '',
    clientLastName: '',
    numberOfPeople: 1,
    clientEmail: '',
}
item0 : item = 
{
  id: '',
    name: '',
    image1: '',
    image2: '',
    description: '',
    price: 0,
    chef: ''
};
  constructor(
              private data : CommandeService,
              private route : ActivatedRoute,
              private items :  ItemsServiceService,
              private flash : FlashMessagesService,
              private router: Router,
              private auth : AuthService
              
) { }

  ngOnInit(): void {
    
   this.sysDateDepart = formatDate(new Date(), 'yyyy-MM-dd', 'en');
   this.Date2.setDate( this.Date2.getDate() + 5 );
   this.sysDateEnd = formatDate(this.Date2, 'yyyy-MM-dd', 'en');
   this.items.getItem(this.route.snapshot.params['id']).subscribe( item => {  
    this.item0 = item;
    });

    this.auth.getauth().subscribe(auth => {
      if(auth)
      {
        
        this.Logged = true;
        this.commande.clientEmail = auth.email;
      }

        else
          this.Logged = false;
    })
  }
  onSubmit({value, valid}: {value: commande, valid: boolean})
  {
    if(valid)
    {
     
      this.commande.name = this.item0.name;
      this.commande.valideCommande = false;
      this.data.newCommande(this.commande);
      this.flash.show('Reservation Added ',{
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
