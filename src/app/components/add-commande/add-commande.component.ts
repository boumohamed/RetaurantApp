import { Component, OnInit } from '@angular/core';
import { commande } from '../../models/commande';
import { item } from '../../models/item';

import { FlashMessagesService } from 'angular2-flash-messages';
import { CommandeService } from '../../services/commande.service';
import {formatDate} from '@angular/common';

import { ItemsServiceService} from '../../services/items-service.service';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-commande',
  templateUrl: './add-commande.component.html',
  styleUrls: ['./add-commande.component.css']
})
export class AddCommandeComponent implements OnInit {



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
              private router: Router
              
) { }

  ngOnInit(): void {
    
   this.sysDateDepart = formatDate(new Date(), 'yyyy-MM-dd', 'en');
   this.Date2.setDate( this.Date2.getDate() + 5 );
   this.sysDateEnd = formatDate(this.Date2, 'yyyy-MM-dd', 'en');
   this.items.getItem(this.route.snapshot.params['id']).subscribe( item => {  
    this.item0 = item;
    });
  }
  onSubmit({value, valid}: {value: commande, valid: boolean})
  {
    if(valid)
    {
     
      this.commande.name = this.item0.name;
      this.commande.valideCommande = false;
      this.data.newCommande(this.commande);
      this.flash.show('Commande Added ',{
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
