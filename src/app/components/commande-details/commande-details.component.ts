import { Component, OnInit } from '@angular/core';

import { CommandeService } from '../../services/commande.service';
import { commande } from '../../models/commande';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, Params, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-commande-details',
  templateUrl: './commande-details.component.html',
  styleUrls: ['./commande-details.component.css']
})
export class CommandeDetailsComponent implements OnInit {

  id : string;
  commande: commande;
  constructor(private data : CommandeService,
              private flash: FlashMessagesService,
              private rout : Router,
              private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.data.getCommande(this.id).subscribe( commande => {
      this.commande = commande;    
      });
  }
  deleteCommande()
  {
    if(confirm('Are you Sure ?'))
      {
         
          this.data.deleteCommande(this.commande);
          this.flash.show("commande Deleted !", {
            cssClass: 'alert-success', timeout: 3000
          });
          this.rout.navigate(['/commandes']);
          
      }
    }

    valideCommande()
    {
      this.commande.valideCommande = true;
      this.data.updateCommande(this.commande);
    }
    cancelCommande()
    {
      this.commande.valideCommande = false;
      this.data.updateCommande(this.commande);
    }

}
